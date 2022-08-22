const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userID: { type: String, require: true},
    message: { type: String, require: true}
})

const model = mongoose.model('MessageModels', messageSchema);

module.exports = model;