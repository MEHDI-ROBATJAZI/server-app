import express from 'express'
const Router = express.Router()

const profile ={name:'zohre',family:"kamali",email:"zohrejooooon89402@gmail.com",gender:'female'}



Router.get('/' , (req,res)=>{
  res.status(200).json(profile)
})


export default Router