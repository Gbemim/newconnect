import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


// @desc    Fetch all profiles
// @route   GET /api/liveusers
// @access  Private
const getLiveUsers = asyncHandler(async(req, res) => {
    const liveUsers = await User.find({})
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(liveUsers)
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
        throw new Error('Product not found')
    }
})

export {
    getLiveUsers,
    getUsersById
}