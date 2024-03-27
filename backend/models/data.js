const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: String,
})

const ProductModle = mongoose.model("data", ProductSchema);

module.exports = ProductModle