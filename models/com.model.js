const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comSchema = new Schema({
    index: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const Com = mongoose.model('Com', comSchema);

module.exports = Com