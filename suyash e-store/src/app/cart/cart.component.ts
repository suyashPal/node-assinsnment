import { Component, OnInit } from '@angular/core';
//import { CartComponent } from './cart/cart.component';
import { Router,ActivatedRoute } from '@angular/router';
import { OnlineshopService } from '.././onlineshop.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user_mailid:String;
  productInfo:any=[];
  errorMessage:string;
    constructor(private router:Router,private route:ActivatedRoute,private onlineshopService:OnlineshopService) {
      this.route.params.subscribe(params => {
        this.user_mailid = params['mailid'];
      });
      this.onlineshopService.getAllUser().subscribe(
              productInfo => this.productInfo=productInfo,
              error => this.errorMessage =<any>error
            );
  }

  ngOnInit() {
  }
  delivercart()
   {
    this.router.navigate(['\cart']);
   }
}
