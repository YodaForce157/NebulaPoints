const mongoose = require('mongoose');

const noprofileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    messaged: { type: Boolean, require: true}
})

const model = mongoose.model('noProfileModels', noprofileSchema);

module.exports = model;