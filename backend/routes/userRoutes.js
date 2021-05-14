import express from 'express'
const router = express.Router()
import {getUsers, getUsersById} from '../controllers/userController.js'


router.route('/').get(getUsers)
router.route('/:id').get(getUsersById)



export default router