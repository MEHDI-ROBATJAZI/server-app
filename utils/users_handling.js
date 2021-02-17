import {validationResult} from 'express-validator'
import bcrypt from 'bcryptjs'

export const handle_validation_signup = (req,res)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
}


export const validate_password = (passwd , hash)=>{
	let  a = false
	bcrypt.compare(passwd,hash).then((res)=>{
		console.log(a)
		a=res
	})

	return a
}