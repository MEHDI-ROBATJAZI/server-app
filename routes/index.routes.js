import express from 'express'
const Router =  express.Router()

import HomeRoute from './home.routes'
import ProfileRouter from './profile.routes'
import SignupRouter from './signup.routes'
import LoginRouter from './login.routes'


Router.use('/' , HomeRoute)
Router.use('/profile' , ProfileRouter)
Router.use('/signup' , SignupRouter )
Router.use('/login' , LoginRouter)





Router.all("*" ,(req,res)=>{
  res.send("404 page")
})


export default Router