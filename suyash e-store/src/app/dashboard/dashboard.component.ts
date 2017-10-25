import { Component, OnInit } from '@angular/core';
import { OnlineshopService } from '.././onlineshop.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private onlineshopService:OnlineshopService) {
    // this.route.params.subscribe(params => {
    //   this.user_mailid = params['mailid'];
  
    // console.log(this.user_mailid);
}

  ngOnInit() {
  }
addCart()
{
    this.router.navigate(['\cart']);
}
}
