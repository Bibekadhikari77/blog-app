const asyncHandler = require("../utils/AsyncHandler")
const ApiError = require("../utils/ApiError");
const User = require("../models/Users");
const ApiResponse = require("../utils/ApiResponse");
const  {generateToken} = require("../config/generateToken");
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

const loginUser = asyncHandler(async (req, res) => {
    // get name and email
    // find user with email
    //check if the name of user match with the name in the request body
    // if match return success response

    const { name, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    if (user.name !== name) {
        throw new ApiError(400, 'Name does not match with the user');
    }
    const token = generateToken(user._id); // Assuming you have a function to generate token
    return res.status(200).json(new ApiResponse(200, {user,token}, "User logged in successfully"));
})
module.exports = {registerUser,loginUser}





















// const asyncHandler = require("../utils/AsyncHandler")
// const {ApiError} = require("../utils/ApiError");
// const User = require("../models/Users");
// const ApiResponse = require("../utils/ApiResponse");
// const  {generateToken} = require("../config/generateToken");
// const bcrypt = require("bcryptjs");

// const registerUser = asyncHandler(async (req, res) => {

//     //get name and email
//     //check if the user with the email already exits or not 
//     //if user already exitst throw error
//     //if not create a new user

//     const {name,email, password} = req.body;

//     if(!name || !email){
//         throw new ApiError(404, 'Name or email is require')
//     }
// const userExists = await User.findOne({ email })

// if  (userExists) {
//     throw new ApiError(400, 'User with this email already exists')
// }

// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(password, salt);
// const user = await User.create({ name, email, password: hashedPassword });

// return res.status(200).json(new ApiResponse(200, user, "User created successful"))

// })

// const loginUser = asyncHandler(async (req, res) => {
//     const { name, email , password} = req.body;
//     const user = await User.findOne({ email });
    
//     if (!user) {
//         throw new ApiError(404, 'User not found');
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect) {
//         throw new ApiError(400, 'Invalid credentials');
//     }

//     const token = generateToken(user._id); // Assuming you have a function to generate token

//     return res.status(200).json(new ApiResponse(200, {user,token}, "User logged in successfully"));
// })

// module.exports = {registerUser,loginUser}