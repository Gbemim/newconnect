import express from 'express'
const router = express.Router()
import { getLiveUsers, getUsersById } from '../controllers/userController.js'
import { protect, isUser } from '../middleware/authMiddleware.js'
import { registerUser } from '../controllers/oneUserController.js'


router.route('/').post(registerUser).get(protect, getLiveUsers, isUser)
router.route('/:id').get(getUsersById)



export default router