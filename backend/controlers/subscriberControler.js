import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import  Subscriber from '../models/subscribeModal.js';



// @desc Auth user & get toke
// @route POST /api/users/login
// @access Public




// @desc Register a new user
// @route POST /api/users
// @access Public
const Subscribers = asyncHandler(async (req, res) => {
    
    let subscriber = await Subscriber.findOne({ email: req.body.email });
    if (subscriber) {
        return res.status(400).send('Already Subscribed');
    } else {
        // Insert the new user if they do not exist yet
        const subscribe = await Subscriber.create({
            email
        })
        
        if(subscribe){
         res.status(201).json({
             _id: subscribe._id,
             email: subscribe.email,
             token:generateToken(subscribe._id)
         })
        }else{
             res.status(400)
             throw new Error('Invalid user data')
        }
         
     }
    })
    


// @desc Get user profile
// @route GET /api/users/profile
// @access Private



// @desc Update user profile
// @route PUT /api/users/profile
// @access Private


// @desc Update user user
// @route PUT /api/users/:id
// @access Private/Admin



// @desc Get All users
// @route GET /api/users
// @access Private/admin
const getSubscribers = asyncHandler(async (req, res) => {
    
    const  subscriber= await Subscriber.find({})
    res.json(subscriber)

    
    
})
// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/admin

// @desc Delete User
// @route DELETE /api/users/:id
// @access Private/admin
const deleteSubscriber = asyncHandler(async (req, res) => {
    
    const subscriber  = await Subscriber.findById(req.params.id)
    if(subscriber){
        await subscriber.remove()
        res.json({message : 'Unsubscribed'})
    }else{
        res.status(404)
        throw new Error('User not found')
    }
    
    
})



export {Subscribers,getSubscribers,deleteSubscriber}
