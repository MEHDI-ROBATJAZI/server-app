import { mongoose, conn } from "./db";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
  name: {type:String,required:false, trim:true },
  family: {type:String,required:false, trim:true },
  email: {type:String, required: true, trim:true },
  passwd: {type:String,required:true, trim:true },
  gender: {type:String,required:false, trim:true },
  tokens:[{
    token:{type:String,required:true},
    access:{type:String,required:true}
  }]
});

// hash password
userSchema.pre("save", function (next){
  let user = this;
  const saltRounds = 10;

  if (user.isModified("passwd")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) throw new Error(err);
      bcrypt.hash(user.passwd, salt, function (err, HASH) {
        if (err) throw new Error(err);

        user.passwd = HASH;
        next();
      });
    });
  } else {
    next();
  }
});


// compare user password and database password
userSchema.statics.findUser_comparePassword = function (email,password) {

  let users = this

  return users.findOne({email:{$eq:email}}).then((User)=>{
    if(!User){
      return Promise.reject()
    }else{
      
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, User.passwd, function (err, isMatch) {
          if (isMatch===false) reject(err);
          else {
            resolve(User);
          }
        });
      });
    }
  })

};

userSchema.methods.generate_token = function(){
  console.log(this)
}

const UserModel = conn.model("users", userSchema);
export default UserModel;
