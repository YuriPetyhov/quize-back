const express = require('express')

const app = express()

app.use('/', (req, res) => {
    res.send('Мы тут подняли сервер')
})

app.listen('8800', (err) => {
    if(err) console.error('server drop')

    console.log('server up on port 8800')
})