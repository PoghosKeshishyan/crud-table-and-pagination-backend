const mongoose = require('mongoose');

const userShchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: String, required: true},
    registered_at: {type: String, required: true},
})

module.exports = mongoose.model('User', userShchema);