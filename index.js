const express = require('express')
const app = express()
const connectDB = require('./src/config/db')
const dotenv = require('dotenv')
dotenv.config()

connectDB()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`)
})