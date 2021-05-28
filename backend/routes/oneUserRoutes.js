import express from 'express'
const router = express.Router()
import { getAccount, authUser, registerUser, updateAccount } from '../controllers/oneUserController.js'
import { isUser, protect } from '../middleware/authMiddleware.js'
import { getLiveUsers, getUsersById } from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/account').get(protect, getAccount).put(protect, updateAccount)
router.route('/').post(registerUser)
router.route('/liveusers').post(registerUser).get(protect, getLiveUsers, isUser)
// router.route('/:id').get(getUsersById)

export default router