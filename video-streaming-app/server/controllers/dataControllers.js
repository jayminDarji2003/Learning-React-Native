const Video = require("../models/video")

// get all videos controller
exports.getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();
        //console.log(videos)

        return res.status(200).json({
            success: true,
            message: "videos get successfully",
            videos
        })
    } catch (error) {
        console.log("something went wrong while getting all videos")
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "can not get all videos"
        })
    }
}


exports.getLatestVideos = async (req, res) => {
    try {
        const videos = await Video.find().sort({ createdAt: -1 }).limit(8);

        return res.status(200).json({
            success: true,
            message: "videos get successfully",
            videos
        })
    } catch (error) {
        console.log("something went wrong while getting latest videos")
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "can not get latest videos"
        })
    }
}