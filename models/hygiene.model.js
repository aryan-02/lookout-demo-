const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hygieneSchema = new Schema({
    index: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const Hygiene = mongoose.model('Hygiene', hygieneSchema);

module.exports = Hygiene