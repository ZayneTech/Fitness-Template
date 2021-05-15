const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const programSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    about: {type: String, required: true},
    difficulty: {type: String, required: true},
    thumbnail: {type: Schema.Types.ObjectId, required: true, ref: 'uploads.files'}
}, {timestamps: true})

const Program = mongoose.model('Program', programSchema);

module.exports = Program