// controllers/videoUpload.js
const cloudinary = require('../config/cloudinary');
const Video = require('../models/Video');

const videoUpload = async (req, res) => {
    try {
        const { title, prompt } = req.body;

        // Check if files are present
        if (!req.files || !req.files.video || !req.files.thumbnail) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const { video, thumbnail } = req.files;

        // Upload video to Cloudinary
        const videoUploadResponse = await cloudinary.uploader.upload(video[0].path, {
            resource_type: 'video',
        });

        // Upload thumbnail to Cloudinary
        const thumbnailUploadResponse = await cloudinary.uploader.upload(thumbnail[0].path, {
            resource_type: 'image',
        });

        // Save to database
        const newVideo = new Video({
            title,
            videoUrl: videoUploadResponse.secure_url,
            thumbnailUrl: thumbnailUploadResponse.secure_url,
            prompt,
        });

        await newVideo.save();

        res.status(201).json({ message: 'Video uploaded successfully', video: newVideo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = videoUpload;
