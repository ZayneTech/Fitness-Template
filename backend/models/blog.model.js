const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    thumbnail: {data: Buffer, contentType: String },
    img: {type: Array}

}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;




