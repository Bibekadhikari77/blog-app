const express = require('express')
const app = express()
const connectDB = require('./src/config/db')
const dotenv = require('dotenv')
dotenv.config()

connectDB()

const PORT = process.env.PORT

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api/users',require('./src/routes/userRoutes'))
app.use('/api/blogs', require('./src/routes/blogRoutes'))
app.use('/api/comments', require('./src/routes/commentRoutes'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`)
})