import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


// @desc    Fetch all profiles
// @route   GET /api/profile
// @access  Private
const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})
    // res.status(401)
    // throw new Error('Not Authorized')
    res.json(users)
})



// @desc    Fetch individual profile
// @route   GET /api/profile:id
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
    getUsers,
    getUsersById
}