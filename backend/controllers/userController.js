import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


// @desc    Fetch all profiles
// @route   GET /api/users/liveusers
// @access  Private
const getLiveUsers = asyncHandler(async(req, res) => {
    const theLiveUser = await User.find({ isLive: true })
    const users = await User.find({})

    if(theLiveUser) {
        res.json(theLiveUser)
 
    }else if(users && !theLiveUser) {
        res.status(204)
       throw new ErrorEvent('No users are online')
    }else {
        res.status(401)
        throw new Error('Not Authorized')
    }
})



// @desc    Fetch individual profile
// @route   GET /api/users:id
// @access  Private
const getUsersById = asyncHandler(async(req, res) => {
    const profile = await User.findById(req.params.id)

    if(profile){
        res.json(profile)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

export {
    getLiveUsers,
    getUsersById
}