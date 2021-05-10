const express = require('express')
const dataprofile = require('./data/dataprofile')

const app = express()

app.get('/', (req, res) => {
    res.send('The API is running...')
})

app.get('/api/profile', (req, res) => {
    res.json(dataprofile)
})

app.get('/api/profile/:id', (req, res) => {
    const profile = dataprofile.find((p) => p._id === req.params.id)
    res.json(profile)
})

app.listen(5000, console.log("Server running"))

