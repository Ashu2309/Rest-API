const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    members: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: new Date
    },
    place: {
        type: String,
        required: true
    }
})

const Achievement = new mongoose.model("Achievement", achievementSchema);
module.exports = Achievement;