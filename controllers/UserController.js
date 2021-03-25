import UserModel from "../db/userSchema";
import { validationResult } from "express-validator";



// user register
export const signupDataStore = (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.json(error);
  }
  // create instance from user model
  const NewUser = new UserModel(req.body);


  // data store to  mongodb
  NewUser.save().then((data) => {
    console.log(data);
    res.status(200).send("your data is saved now");
  });
};


// login user
export const loginUser = async (req, res) => {
  try {
    const { email, passwd } = req.body;

    const User = await UserModel.findUser_comparePassword(email,passwd);
      //invalid password
    if(!User){
      res.status(400).json({ErrorMessage:"your password is invalid please enter valid password"})
    }else{
      
      User.generate_token()

      res.status(200).send("every thing is ok");
    }
  } catch (err){
    console.error(err)
  }
};



