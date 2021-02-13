const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Mohon masukan nama lengkap kamu'],
        unique: true,
        maxlength: [40, 'Nama tidak boleh lebih dari 40 karakter']
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);