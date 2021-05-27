import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async(req, res) => {
    const {email, password } = req.body
    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            isLive: user.isLive,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password } = req.body
    const userExists = await User.findOne({ email })

   if(userExists){
       res.status(400)
       throw new ErrorEvent('User already exists')
   }

   const user = await User.create({
       email,
       password,
       name
   })

   if(user){
        res.status(201).json({
            id:user._id,
            name: user.name,
            email: user.email,
            isLive: user.isLive,
            token: generateToken(user._id)
        })
   }else{
        res.status(400)
        throw new Error('Invalid user data')
   }
})


// @desc    Get individual user profile
// @route   GET /api/users/account
// @access  Private
const getAccount = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            isLive: user.isLive,
        })
    } else {
        res.status(404)
        throw new Error('User not Found')
    }

    res.send('Success')
})


// @desc    Update individual user profile
// @route   PUT /api/users/account
// @access  Private
const updateAccount = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.about = req.body.about || user.about
        user.email = req.body.email || user.email
        if(req.body.password) {
            user.password = req.body.password
        }
        const updatedUserAccount = await user.save()

        res.json({
            _id:updatedUserAccount._id,
            name: updatedUserAccount.name,
            about: updatedUserAccount.about,
            email: updatedUserAccount.email,
            isLive: updatedUserAccount.isLive,
        })
    } else {
        res.status(404)
        throw new Error('User not Found')
    }

    res.send('Success')
})


export {
    authUser, getAccount, registerUser, updateAccount
}