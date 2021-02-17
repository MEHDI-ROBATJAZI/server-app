import UserModel from '../db/userSchema'
import {validationResult} from 'express-validator'
import {validate_password} from '../utils/users_handling'

export const signupDataStore=(req,res)=>{

  const error = validationResult(req)
  if(!error.isEmpty()){
    res.json(error)
  }

  const {
    name,
    family,
    email,
    passwd,
    gender,
  } = req.body


  
  
  const NewUser = new UserModel(req.body)
  
  console.log(NewUser.getAllUsers)
  // NewUser.save().then(()=>{
    // })
    res.send('your data is saved now')

}


export const loginUser= async(req,res)=>{
    
  const {email ,passwd} = req.body

  const user = await UserModel.findOne({email:{$eq:email}} , 'passwd').exec()


  console.log(validate_password(passwd , user.passwd))
  
  // console.log(result)
  
  res.send('dkjfak')

}