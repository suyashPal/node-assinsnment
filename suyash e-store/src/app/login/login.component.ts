import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { OnlineshopService } from '.././onlineshop.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string;
  message:string;
  userInfo:any=[];
  errorMessage:string;
  validUser:any=[];
  user:string;
  note:string;
  constructor(private router:Router,public onlineshopService:OnlineshopService) {
    this.onlineshopService.getAllUser().subscribe(
            userInfo => this.userInfo=userInfo,
            error => this.errorMessage =<any>error
          );
    this.title="Login";
   }
  ngOnInit() {
  }
  onAuthentication(user_email,user_pass)
    {
      // console.log(entered_email);
      // this.validUser=this.getValidUser(entered_email);
      if(user_email!==undefined&&user_pass!==undefined)
      {
        this.validUser= this.userInfo.filter(function(user){
        console.log(user.mailid);
        if(user.mailid===user_email && user.password===user_pass)
          return user;
        })
        console.log(this.validUser);
        if(this.validUser.length>0)
        {
          this.router.navigate(['\dashboard',{emailId:user_email}]);
        }
        if(this.validUser.length<=0)
        {
          this.user="Invalid User";
          this.note="member Not found ! Please signup";
        }
      }
      else
      {
        this.user="Invalid User";
        this.note="Member not found ! Please signup";
      }
    }
    onSignup(){
      this.router.navigate(['\signup']);
    }
  }
