import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishCartService } from 'src/app/shared/services/wish-cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  constructor(private _WishCartService:WishCartService ,private _CartService:CartService , private _ToastrService:ToastrService){}
  WishListDetails:any={}
  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message ,'Wish Cart')
      }
    })
  }
  removeCartItem(id:string):void{
    this._WishCartService.removeItem(id).subscribe({
      next:(response)=>{
        this.WishListDetails=response.data
      }
    })
  }
ngOnInit(): void {
    this._WishCartService.getUserWishList().subscribe({
      next:(response)=>{
        console.log(response)
        this.WishListDetails=response.data
      }
    })
    
}
}
