const express = require('express');
const { createBlog, getAllBlogs,deleteBlog , getSingleBlog, updateBlog} = require('../controllers/blogControllers');
const {protect, authorizeRoles} =require("../middlewares/authMiddleware")
const upload = require('../middlewares/multer');

const router = express.Router()

router.post('/create', protect,authorizeRoles("admin"), upload.array('images', 5) ,createBlog); // Assuming createBlog is defined in blogControllers.js
router.get('/get-blogs', protect, getAllBlogs); // Assuming getAllBlogs is defined in blogControllers.js
router.delete('/deleteblog/:id', protect,authorizeRoles("admin"), deleteBlog);
router.get('/get-blog/:id', protect, getSingleBlog); // Assuming getSingleBlog is defined in blogControllers.js
router.put('/update-blog/:id', protect, authorizeRoles("admin"), upload.array('images', 5), updateBlog);

module.exports = router;