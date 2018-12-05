const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'persons'
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 15
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);