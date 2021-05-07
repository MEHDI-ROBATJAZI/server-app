import UserModel from "../db/userSchema";
import dotenv from "dotenv"
dotenv.config()

export const CheckAdminPassword = (code)=>{
	console.log(code)
	console.log(process.env.ADMIN_SECRET_PASS)
	if(code===process.env.ADMIN_SECRET_PASS){
		return true
	}else{
		return false
	}
}


export const getUsersCount = (req,res)=>{
	console.log(req.session)
  UserModel.countDocuments({},function(err,count){
  	if(err){
  		res.status(400).json({error:err})
  	}else{
    	res.status(200).json({count})
  	}
  })
}


export const getUsersInfo = async(req,res)=>{

	const limitInfoUsers = await UserModel
	.find({},"name family email gender")
	.sort({_id:-1})
	.limit(6)
	.exec()

	res.status(200).json(limitInfoUsers)
}

export const getMalesInfo = async(req,res)=>{
	const malesInfo = await UserModel
	.find({gender:"male"}, "name family email gender")
	.sort({_id:-1})
	.limit(6)
	.exec()
	res.status(200).json(malesInfo)
}


export const getFemalesInfo = async(req,res)=>{
	const femalesInfo = await UserModel
	.find({gender:"female"},"name family email gender")
	.sort({_id:-1})
	.limit(6)
	.exec()
	res.status(200).json(femalesInfo)
}

export const getMaleAndFemaleLength=async(req,res)=>{
	const malesCount = await UserModel.countDocuments({gender:"male"})
	const femalesCount = await UserModel.countDocuments({gender:"female"})


	res.status(200).json({males:malesCount,females:femalesCount})
}