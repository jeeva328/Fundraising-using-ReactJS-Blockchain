const mongoose = require("mongoose")

const RaiserDetials = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    Needfirstname: {
        type: String,
        required: true
    },
    Needlastname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Purpose: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    wallet_address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    expDate: {
        type: Date,
        required: true
    },
    raised: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model("RaiserDetials", RaiserDetials)