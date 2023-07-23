const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 1457
var originalData = "Common factoring is the most important skill in math"

app.get('/initialText', (req, res) => {
    res.json({text : originalData})
})

app.post('/newText', (req, res) => {
    //console.log(req.body.text);
    originalData = req.body.text;
    res.status(200).send("OK");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})