const express = require('express');
const { createBlog } = require('../controllers/blogControllers');
const {protect, authorizeRoles} =require("../middlewares/authMiddleware")
const upload = require('../middlewares/multer');

const router = express.Router()

router.post('/create', protect,authorizeRoles("admin"), upload.array('images', 5) ,createBlog); // Assuming createBlog is defined in blogControllers.js

module.exports = router;