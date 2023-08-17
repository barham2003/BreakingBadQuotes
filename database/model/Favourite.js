const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Model = mongoose.model

const FavouriteSchema = new Schema({
    quote: String,
    author: String,

}, { timestamps: true })

const Favourite = Model("Quote", FavouriteSchema)

module.exports = Favourite