import express from 'express'
const Router = express.Router()
import {signupPage ,signupDataStore} from '../controllers/UserController'

Router.post('/' ,signupDataStore)

export default Router