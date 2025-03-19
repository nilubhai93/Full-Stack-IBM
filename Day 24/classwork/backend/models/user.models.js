const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
});

const userModel = mongoose.model("user", userSchema);
module.exports = {
    userModel //exporting the user model to use in other files
}