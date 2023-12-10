const mongoose = require ("mongoose");

const userSchema = mongoose.Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    contactNumber: {type: Number, required: true},
    address: {type: String, required: true},
    pinCode: {type: Number, required: true},
    imgUrl: {type: String, required: true},
})

const UserModel = mongoose.model ("User", userSchema);

module.exports = UserModel;