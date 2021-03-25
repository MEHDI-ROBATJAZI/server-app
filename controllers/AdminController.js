import UserModel from "../db/userSchema";
import dotenv from "dotenv"
dotenv.config()

export const CheckAdminPassword = (code)=>{
	if(code===process.env.ADMIN_SECRET_PASS){
		return true
	}else{
		return false
	}
}


export const getUsersCount = (req,res)=>{
  UserModel.countDocuments({},function(err,count){
    res.status(200).json({count})
  })
}


export const getUsersInfo = async(req,res)=>{

	const limitInfoUsers = await UserModel.find({},
		"name family email gender").sort({_id:-1}).limit(5).exec()

	res.status(200).json(limitInfoUsers)
}

export const getMalesInfo = async(req,res)=>{
	const malesInfo = await UserModel.find({gender:"male"}, "name family email gender").sort({_id:-1}).limit(5).exec()
	console.log(malesInfo)
	res.status(200).json(malesInfo)
}


export const getFemalesInfo = async(req,res)=>{
	const femalesInfo = await UserModel.find({gender:"female"},"name family email gender").sort({_id:-1}).limit(5).exec()
	res.status(200).json(femalesInfo)
}