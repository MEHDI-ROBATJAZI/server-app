import express from 'express'
const Router = express.Router()
import {CheckAdminPassword} from '../controllers/AdminController'
import {
	getUsersCount,
	getUsersInfo,
	getMalesInfo,
	getFemalesInfo
} from '../controllers/AdminController'

Router.post('/check-password',(req,res)=>{
	const {Admin_Code} = req.body 
	const result = CheckAdminPassword(Admin_Code)
	res.status(200).json({result})
})

Router.get("/getUsersCount",getUsersCount)
Router.get("/getUsersInfo",getUsersInfo)
Router.get("/getUsersInfo/males",getMalesInfo)
Router.get("/getUsersInfo/females",getFemalesInfo)




export default Router