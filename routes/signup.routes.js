import express from 'express'
const Router = express.Router()
import {signupPage ,signupDataStore} from '../controllers/UserController'
import {check} from 'express-validator' 




Router.post('/' ,

  check("passwd").isLength({min:4})
  .withMessage("your password is too low")

, signupDataStore)




export default Router