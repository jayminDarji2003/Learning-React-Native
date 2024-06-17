const express = require('express');
const { signup, login } = require('../controllers/userController');
const videoFileUpload = require("../controllers/videoController")
const multer = require('multer');

const router = express.Router();
router.post("/signup", signup)
router.post("/login", login)

router.post("/video-upload", videoFileUpload)

module.exports = router;