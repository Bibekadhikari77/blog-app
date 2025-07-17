const express = require('express');
const { createBlog } = require('../controllers/blogControllers');
const {protect} =require("../middlewares/authMiddleware")

const router = express.Router()

router.post('/create', protect, createBlog); // Assuming createBlog is defined in blogControllers.js

module.exports = router;