import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'


dotenv.config()

connectDB()

const app = express()

// app.get('/', (req, res) => {
//     res.send('The API is running...')
// })

const __dirname = path.resolve()
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('The API is running...')
    })
}

app.use('/api/profile', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV } mode on ${PORT}`.yellow.bold))

