import express from 'express'
const router = express.Router()
import { getAccount, authUser, registerUser } from '../controllers/oneUserController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/account').get(protect, getAccount)
router.route('/').post(registerUser)

export default router