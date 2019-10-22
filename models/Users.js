const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    login: String,
    password: {type: String, select: false}
})

const User = mongoose.model("User", userScheme);
const user = new User({login: "Li"});

user.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект user", user);
});
