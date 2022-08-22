const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    points: { type: Number, default: 0},
    rank: { type: String}
})

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;