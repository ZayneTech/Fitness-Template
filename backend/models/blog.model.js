const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {type: String, required: true},
    summary: {type: String, required: true},
    content: {type: String, required: true},
    thumbnail: {type: Object, required: true},
    img: {type: Array}

}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;




