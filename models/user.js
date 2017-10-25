var mongoose=require('mongoose');

var user_schema=mongoose.Schema;
var user_Schemaobject=new user_schema({
  name:{type:String},
  birthdate:{type:String},
  mailid:{type:String},
  contactno:{type:Number},
password:{type:String},
  address:{type:String},
  pincode:{type:Number},
});
var user2=mongoose.model('user',user_Schemaobject);
module.exports=user2;
