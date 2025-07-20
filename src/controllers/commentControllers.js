const asyncHandler = require("../utils/AsyncHandler");
const ApiResponse = require("../utils/ApiResponse");
const Comment = require("../models/Comment");

const  createComment = asyncHandler(async (req, res) => {

    const {id} = req.params;
    const userId = req.user._id;
    const {text} = req.body;

    if (!text) {
        throw new Error(400, "Comment text is required");
    }

    const comment = await Comment.create({
        blog: userId,
        user: userId,
        text
    });  

    return res.status(201).json( new ApiResponse(201, comment, "Comment created successfully")); 

});
module.exports = createComment;