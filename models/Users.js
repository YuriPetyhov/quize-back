const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    login: String,
    password: {type: String, select: false}
})

const user = new User('jone', user)
user.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект user", user);
});
