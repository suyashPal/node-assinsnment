var user1=require('../models/user');

exports.postuserDetails=function(request,response){
  var user=new user1({
    name : request.body.name,
    birthdate:request.body.birthdate,
    mailid:request.body.mailid,
    contactno:request.body.contactno,
    pincode:request.body.pincode,
    password:request.body.password,
    address:request.body.address,
    });
    user.save((error,res)=>{
      if(error)
      console.log(error);
      else {
          response.json({
            success:true,
            body:res
          })
      }
  });

}

exports.getAllUser=function(request,response){
  user1.find({},(error,res)=>{
    if(error)
    response.json(error);
  response.json(res);
  });

}
