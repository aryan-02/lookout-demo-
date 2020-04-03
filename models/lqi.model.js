const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lqiSchema = new Schema({
    index: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const Lqi = mongoose.model('Lqi', lqiSchema);

module.exports = Lqi