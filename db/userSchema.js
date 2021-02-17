import { mongoose, conn } from "./db";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,
  family: String,
  email: String,
  passwd: String,
  gender:String,
});


// hash password
userSchema.pre("save", function (next) {
  let user = this;
  const saltRounds = 10

  if (user.isModified("passwd")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if(err) throw new Error(err)
      bcrypt.hash(user.passwd, salt, function (err, HASH) {
        if(err) throw new Error(err)

       user.passwd = HASH
       next()
      });
    });
  } else {
    next();
  }
});



  // assign a function to the "methods" object of our animalSchema
  userSchema.statics.getAllUsers = function(cb) {
    return mongoose.model('users').find({}, cb);
  };




const UserModel = conn.model("users", userSchema);
export default UserModel;
