const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const crowdSchema = new Schema({
    index: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const Crowd = mongoose.model('Crowd', crowdSchema);

module.exports = Crowd