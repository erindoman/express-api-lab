const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kittySchema = new Schema({
    name: {type: String, required: true},
    breed: {type: String, default: "Tabby"},
    age: {type: Number, default: 0}
}, {
    timestamps: true
})

module.exports = mongoose.model('Kitty', kittySchema)