const express = require('express');
const { signup, login } = require('../controllers/userController');
const videoUpload = require('../controllers/videoController');
const multer = require('multer');

const router = express.Router();
router.post("/signup", signup)
router.post("/login", login)


const upload = multer({ dest: 'uploads/' }); // Configure multer to use 'uploads' directory
router.post('/create', upload.fields([{ name: 'video', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), videoUpload);

module.exports = router;