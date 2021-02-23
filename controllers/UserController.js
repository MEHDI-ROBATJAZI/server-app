import UserModel from '../db/userSchema'
import {validationResult} from 'express-validator'
import {validate_password} from '../utils/users_handling'

export const signupDataStore=(req,res)=>{

  const error = validationResult(req)
  if(!error.isEmpty()){
    res.json(error)
  }

  // const {
  //   name,
  //   family,
  //   email,
  //   passwd,
  //   gender,
  // } = req.body


  
  
  const NewUser = new UserModel(req.body)

  NewUser.save().then((data)=>{
    console.log(data)
    res.send('your data is saved now')
  })

}


export const loginUser= async(req,res)=>{
    
  const {email ,passwd} = req.body

  const user = await UserModel.findOne({email:{$eq:email}} , 'passwd').exec()


  const Result = validate_password(passwd , user.passwd)
  
  if(Result){
    res.status(200).send('your password is valid')

  }else{
    res.status(400).send("invalid password")
  }
}