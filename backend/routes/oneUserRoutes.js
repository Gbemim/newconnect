import express from 'express'
const router = express.Router()
import { getAccount, authUser, registerUser, updateAccount } from '../controllers/oneUserController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.route('/account').get(protect, getAccount).put(protect, updateAccount)
router.route('/').post(registerUser)

export default router