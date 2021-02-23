import {validationResult} from 'express-validator'
import bcrypt from 'bcryptjs'

export const handle_validation_signup = (req,res)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
}


export const validate_password = (passwd , hash)=>{
	let isValid = false
	isValid = bcrypt.compareSync(passwd,hash)
	console.log(isValid)
	return isValid
}