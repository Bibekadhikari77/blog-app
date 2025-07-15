const mongooes = require('mongoose')
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async () => {
    try {
        await mongooes.connect(process.env.MONGO_URL)
        console.log("MongoDB connected.........")

    }
    catch (error) {
        console.error("error",error)
}
}
module.exports= connectDB;