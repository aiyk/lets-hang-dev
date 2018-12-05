const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PersonSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    othernames: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        trim: true,
        maxlength: 255
    },
    phone: {
        type: String,
        trim: true,
        maxlength: 255
    },
    gender: {
        type: String,
        trim: true,
        maxlength: 255
    },
    location: {
        type: String,
        trim: true,
        maxlength: 255
    },
    profession: {
        type: String,
        trim: true,
        maxlength: 255
    },
    private: {
        type: Boolean,
        default: false,
    },
    quote: {
        type: String,
        trim: true,
        maxlength: 400
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Person = mongoose.model('persons', PersonSchema);