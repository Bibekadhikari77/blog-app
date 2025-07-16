const asyncHandler = require("../utils/AsyncHandler")
const ApiError = require("../utils/ApiError");
const User = require("../models/Users");
const ApiResponse = require("../utils/ApiResponse");

const registerUser = asyncHandler(async (req, res) => {

    //get name and email
    //check if the user with the email already exits or not 
    //if user already exitst throw error
    //if not create a new user

    const {name,email} = req.body;

    if(!name || !email){
        throw new ApiError(404, 'Name or email is require')
    }
const userExists = await User.findOne({ email })

if  (userExists) {
    throw new ApiError(400, 'User with this email already exists')
}

const user = await User.create({
    name,
    email
})

return res.status(200).json(new ApiResponse(200, user, "User created successful"))

})

module.exports = {registerUser}