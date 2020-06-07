const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KaomojiSchema = new Schema({
    kaomoji: String,
    emotion: String
})

module.exports = mongoose.model('Kaomoji', KaomojiSchema)