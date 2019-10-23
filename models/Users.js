const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    login: {type: String, unique: true },
    password: {type: String, select: false},
    role: String
})

const User = mongoose.model("User", userScheme);
module.exports = User

