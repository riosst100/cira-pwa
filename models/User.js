const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Mohon masukan nama lengkap kamu'],
        maxlength: [40, 'Nama tidak boleh lebih dari 40 karakter']
    },
    call_name: {
        type: String,
        required: [true, 'Mohon masukan nama panggilan kamu'],
        maxlength: [40, 'Nama tidak boleh lebih dari 40 karakter']
    },
    birthdate: {
        type: Date,
        required: [true, 'Mohon masukan tanggal lahir kamu']
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);