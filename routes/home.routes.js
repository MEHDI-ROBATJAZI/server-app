import express from 'express'
const Router = express.Router()


Router.get('/' , (req,res)=>{
  res.send("this is home router")
})


export default Router