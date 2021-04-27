const express = require('express');
const Blogs = require('../models/blog.model');

const router = express.Router();

/*import middleware */
const adminChecker = require('../middleware/adminchecker');
const upload = require('../middleware/multer');


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
router.post('/add', adminChecker, upload.single('thumbnail'), (req, res) => {
    const { title, summary, content } = req.body
    const thumbnail = req.file.id

    const newBlog = new Blogs({
        title,
        summary,
        content,
        thumbnail
    })

    newBlog.save()
    .then(() => { res.json('Blog Successfully Added')})
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