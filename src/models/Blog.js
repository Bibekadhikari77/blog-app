const mongoose = require('mongoose')

const blogSchema = new mongoose.SchemaType({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        ref: 'User',
        required: true
    },
    image: [{
        type: String
       }]
})

module.exports = mongoose.model('Blog',blogSchema)