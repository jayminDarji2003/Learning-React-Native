// importing models
const cloudinary = require("cloudinary").v2
const Video = require("../models/video")

// check file exists or not
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

// video upload helper functions
async function videoUploadFileToCloudinary(file, folder) {
    const options = { folder, resource_type: 'video' };
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, options);
        console.log(result);
        return result;
    } catch (error) {
        console.log("ERROR IN FILE UPLOAD TO Cloudinary");
        console.error(error);
        throw error;
    }
}

// image upload helper functions
async function imageUploadFileToCloudinary(file, folder) {
    const options = { folder };
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, options);
        console.log(result);
        return result;
    } catch (error) {
        console.log("ERROR IN FILE UPLOAD TO Cloudinary");
        console.error(error);
        throw error;
    }
}


// image upload
const videoFileUpload = async (req, res) => {
    try {
        // fetch the data from req
        const { title, prompt, user } = req.body;
        //console.log("GET THE DATA : ", title, prompt, user);

        // get file
        const file = req.files.imageFile;
        //console.log("GET IMAGE FILE : ", file);

        // video file data
        const videoFile = req.files.video;
        //console.log("VIDEO FILE => ", videoFile)

        // validation
        // const supportedTypes = ["jpg", "jpeg", "png"];

        // current file type
        // const currentFileType = file.name.split(".")[1].toLowerCase();
        // console.log("FILE EXTENSION : ", currentFileType);

        // file type not supported
        // if (!isFileTypeSupported(currentFileType, supportedTypes)) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "File type not supported"
        //     })
        // }

        // if file type is supported
        // upload file to cloudinary
        console.log("UPLOADING TO CLOUDINARY")
        const responseImage = await imageUploadFileToCloudinary(file, "aora");
        console.log("IMAGE RESPONSE => ", responseImage);

        const responseVideo = await videoUploadFileToCloudinary(videoFile, "aora");
        console.log("VIDEO RESPONSE => ", responseVideo);



        // database entry
        console.log("DATABASE ENTRY CREATING");
        const fileData = await Video.create({
            title,
            prompt,
            user,
            thumbnail: responseImage.secure_url,
            videoUrl: responseVideo.secure_url
        })
        console.log("DATABASE ENTRY DONE");

        res.json({
            success: true,
            message: "File created successfully created successfully"
        })

    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "something went wrong while uploading image"
        })
    }
}


// video upload handler
// exports.videoUpload = async (req, res) => {
//     try {
//         // fetch the data
//         const { name, tags, email } = req.body;
//         console.log(name, tags, email);

//         // video file data
//         const videoFile = req.files.video;
//         console.log(videoFile)

//         // validation
//         const supportedTypes = ["mp4", "mp3", "mkv"];

//         // current file type
//         const currentFileType = videoFile.name.split(".")[1].toLowerCase();
//         console.log("FILE EXTENSION : ", currentFileType);

//         // file type not supported
//         if (!isFileTypeSupported(currentFileType, supportedTypes)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "File type not supported"
//             })
//         }

//         // file type is supported
//         console.log("UPLOADING TO CLOUDINARY")
//         const response = await videoUploadFileToCloudinary(videoFile, "dotbatch");
//         // file = file name
//         // dotbatch = folder name , it is in the cloudinary folder
//         console.log("RESPONSE => ", response);

//         // database entry
//         console.log("DATABASE ENTRY CREATING");
//         const fileData = await File.create({
//             name,
//             tags,
//             email,
//             fileUrl: response.url
//         })
//         console.log("DATABASE ENTRY DONE");

//         res.json({
//             success: true,
//             message: "video created successfully created successfully"
//         })
//     } catch (e) {
//         console.error("Something went wrong");
//         res.status(400).json({
//             success: false,
//             message: "Something went wrong while uploading video"
//         })
//     }
// }

module.exports = videoFileUpload