import UserModel from "../db/userSchema";
import jwt from 'jsonwebtoken'

// user register
export const signupDataStore = (req, res) => {
  // create instance from user model
  const NewUser = new UserModel(req.body);


  // data store to  mongodb
  NewUser.save().then((data) => {
    console.log(data);
    res.status(200).json({msg:"your data is saved now"});
  });
};


// login user
export const loginUser = async (req, res) => {
  res.status(200).send('login')
/*
  try {
    const { email, passwd } = req.body;

    const User = await UserModel.findUser_comparePassword(email,passwd);
      //invalid password
    if(!User){
      res.status(400).json({ErrorMessage:"your email or password is invalid please enter valid email-password"})
    }else{

      UserModel.findByIdAndUpdate({_id:User._id , {
          $push:{
            scores:90
        }
      }})

      res.status(200).json({msg:"every thing is ok"});
    }
  } catch (err){
    console.log('point')

    console.log(err.message)
  }
*/
};


