const express = require('express');
const Blogs = require('../models/blog.model');
const adminChecker = require('../middleware/adminchecker');

const router = express.Router();

/* Get all blogs posts */
router.get('/', (req, res) => {
    Blogs.find({}, (err, blog) => {
        if (err) return err
    })
    .then((blogs) => {
        res.json(blogs)
    })
    .catch((err) => res.status(400).json(err))
})

/* Get a single blog post */
router.get('/:id', (req, res) => {
    const blogId = req.params.id;

    Blogs.findById(blogId, (err, blog) => {
        if (err) return err
    })
    .then((blog) => { res.json(blog)})
    .catch((err) => { res.status(400).json(err) })
})

/* Add new blog post */
router.post('/add', adminChecker, (req, res) => {
    const newBlog = new Blogs(req.body)

    newBlog.save()
    .then(() => { res.json('Program Successfully Added')})
    .catch((err) => { res.status(400).json(err)})
})

/* Update existing blog post */
router.put('/edit/:id', adminChecker, (req, res) => {
    const blogId = req.params.id;

    Blogs.findById(blogId, (err, blog) => {
        if (err) return err
    })
    .then(blog => {
        blog.title = req.body.title;
        blog.description = req.body.description;
        blog.thumbnail = req.body.thumbnail;
        blog.imgs = req.body.imgs; /*Files */

        blog.save()
        .then(() => { res.json('Blog Successfully Updated')})
        .catch(err => { res.status(400).json(err) })
    })
    .catch(err => { res.status(400).json(err) })
})

/* Delete existing blog post */
router.delete('/:id', adminChecker, (req, res) => {
    const blogId = req.params.id;

    Blogs.findByIdAndDelete(blogId, (err, blog) => {
        if (err) return err
    })
    .then(() => { res.json('blog successfully updated')})
    .catch(err => { res.status(400).json(err) })
})


module.exports = router;