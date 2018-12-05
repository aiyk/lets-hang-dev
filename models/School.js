const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const SchoolSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    address: {
        country: {
            type: String,
            required: true
        },
        state: {   
            type: String,
            required: true
        },
        lga: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {   
            type: String,
            required: true
        },
        address: {   
            type: String,
            required: true
        },
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
    logo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = School = mongoose.model('schools', SchoolSchema);