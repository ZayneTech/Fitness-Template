const express = require('express');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const path = require('path');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


/*Initialize app and port*/
const app = express();
const PORT = process.env.PORT || 5000;

/* Express MiddleWare & Cors*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors('*'));

/*Connect to MongoDB */
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).catch(err => console.log(err))

const connection = mongoose.connection;

let gfs;

connection.once('open', () => {
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('uploads');
    console.log('Connected to MongoDB')
})

/* Define Routes*/
const programsRoute = require('./routes/programs');
const blogsRoute = require('./routes/blogs');
const adminRoute = require('./routes/admin');

/* Use Routes */
app.use('/programs', programsRoute);
app.use('/admin', adminRoute);
app.use('/blogs', blogsRoute);

app.get('/', (req, res) => {
    console.log('home request recieved');
    res.status(200).sendFile(path.join(__dirname, '../fitness-template/src/index.js'))
})


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})