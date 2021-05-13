import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import dataprofile from './data/dataprofile.js'

dotenv.config()

connectDB()

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV } mode on ${PORT}`.yellow.bold))

