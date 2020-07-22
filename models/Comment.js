const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    ticker : {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", CommentSchema)