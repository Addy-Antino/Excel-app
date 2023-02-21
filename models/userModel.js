const mongoose = require("mongoose");
const validator = require("validator");


const userSchema =  mongoose.Schema({
name:{
type:String,
trim:true,
required:[ true,"Please enter your name"],
maxlength:[30,"Name can't exceed 20 characters"]
},
email:{
    type:String,
    required:true,
    validate:[validator.isEmail,"Please enter a valid email"],
    unique:true

},phoneno:{
    type:Number,
    required:true,
    trim:true,
    unique:true,
    minlength:10,
    maxlength:10
   
},
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },role:{
    type:String,
    default:"User",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,


},{
    timestamp:true
  }
  
  )
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });

  
module.exports=mongoose.model('User',userSchema)