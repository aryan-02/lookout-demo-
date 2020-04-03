const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const healthSchema = new Schema({
    index: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const Health = mongoose.model('Health', healthSchema);

module.exports = Health