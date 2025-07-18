const { ApiError } = require("../utils/ApiError");
const asyncHandler = require("../utils/AsyncHandler");
const Blog = require("../models/Blog");
const ApiResponse = require("../utils/ApiResponse");

const createBlog = asyncHandler(async (req, res) => {
    const { title, content,author } = req.body;

    if (!title || !content || !author) {
        throw new ApiError(400,"Title, content, and author are required");
    }
    const imageUrls = req.files?.map(file => file.path);
    const blog = await Blog.create({
        title,
        content,
        author,
        images: imageUrls
    });
    return res.status(200).json(new ApiResponse(200, blog, "Blog created successfully"));

});
module.exports = { createBlog };