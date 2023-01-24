
import express from 'express'
const router = express.Router()
import {Subscribers,getSubscribers,deleteSubscriber} from '../controlers/subscriberControler.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(Subscribers).get(admin,getSubscribers)

router.route('/:id').delete(admin,deleteSubscriber)

export default router