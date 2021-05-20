import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/oneUserController.js'


router.post('/login', authUser)

export default router