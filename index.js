const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
app.use('/', (req, res) => {
    res.send('Мы тут подняли сервер')
})
mongoose.connect("mongodb+srv://quiz:19911103@cluster0-uu9ts.mongodb.net/test?retryWrites=true&w=majority/users",
    {useNewUrlParser: true},
    function(err){
    if(err) return console.log(err);
});
app.listen(3101, function(){
    console.log("Сервер ожидает подключения...");
});
