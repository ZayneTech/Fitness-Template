const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');
const path = require('path')

const uri = process.env.ATLAS_URI;

const storage = new GridFsStorage({
    url: uri,
    options: {useUnifiedTopology: true},
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: 'uploads'
            };
            resolve(fileInfo)
        })
    }
});

const upload = multer({ storage: storage });

module.exports = upload;