import { Component, OnInit } from '@angular/core';
import { OnlineshopService } from '.././onlineshop.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:string;
  userExists:string;
userInfo:any=[];
  validUser:any=[];
  message:string;
  user:any;
  filter:string;
   status:boolean;
  constructor(private onlineshopService:OnlineshopService) {
    this.title="Signup";
  }

  ngOnInit() {
  }


  onSubmit(name,password,contactno,mailid,birthdate,pincode,address){
    console.log("name "+name);
console.log("birthdate" +birthdate);
console.log("password" +password);
console.log("mailid" +mailid);
console.log("pincode" +pincode);
console.log("address" +address);
console.log("contactno" +contactno);



      this.user={
        name,birthdate,password,contactno,mailid,pincode,address
      };

      // if(name!==undefined&&birthdate!==undefined&&password!==undefined&&contactno!==undefined&&mailid!==undefined&&pincode!==undefined&&address!==undefined)
      // {
      this.validUser= this.userInfo.filter(function(userDetail){
        console.log(userDetail.mailid);
        if(userDetail.mailid===mailid)
          return userDetail;
        })
        if(this.validUser.length>0)
        {
          this.userExists="User Already Exists";
  //        this.status=false;
        }
        if(this.validUser.length<=0)
        {
          // this.user="Invalid User";
          // this.note="Not a Member Yet???Please signup!!!";
          this.onlineshopService.addUser(this.user);
          this.message="Signup Successfullly!!!Please Login to continue!!!";
        }
      // }
      // else
      // {
      //   this.userExists="Empty values are not Allowed!!!";
      //   this.status=false;
      // }

        // this.shoppingInfoService.addUser(this.user);
        // this.message="Signup Successfullly!!!Please Login to continue!!!"

    }

  }
