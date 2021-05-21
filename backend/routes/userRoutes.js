import express from 'express'
const router = express.Router()
import { getLiveUsers, getUsersById } from '../controllers/userController.js'


router.route('/').get(getLiveUsers)
router.route('/:id').get(getUsersById)



export default router