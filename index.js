const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('', routes)

mongoose.connect("mongodb+srv://quiz:19911103@cluster0-uu9ts.mongodb.net/quiz?retryWrites=true&w=majority",
    {useNewUrlParser: true},
    function(err){
        if(err) return console.log(err)
        console.log('Db connected')
    }
);
app.listen(3101, function(){
    console.log("Сервер ожидает подключения...");
});
