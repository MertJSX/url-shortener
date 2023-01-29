const mongoose = require('mongoose');

var urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: String,
        default: new Date().toDateString()
    }
});



module.exports = {urlSchema};