const mongoose = require('mongoose');

const UserSchema = moongose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    points: {
        tye: BigInt,
        default: 0
    }
});

module.exports = mongoose.model("User", UserSchema)