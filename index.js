require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('cosmic_strings')
})

app.get('/login', (req, res) => {
    res.send('<h1>Welcome to Akash control</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})