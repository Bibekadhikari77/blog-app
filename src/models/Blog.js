const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  images: {
    type:[{
        type: String
    }]
  }
}, { timestamps: true });

module.exports = mongoose.model("Blog", BlogSchema);
