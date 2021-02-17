import express from 'express'
const Router = express.Router()
import {loginUser} from '../controllers/UserController'


Router.post('/' , loginUser)


export default Router