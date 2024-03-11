import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService){}
  cartDetails:any={}
  numOfTotal:any={}
  changeCount(id:string , countProduct:number):void{
    this._CartService.updateCart(id ,countProduct).subscribe({
      next:(response)=>{
        
        this.cartDetails=response.data;
        this.numOfTotal=response
      }
    })

  }
  removeCartItem(id:string):void{
    this._CartService.removeItem(id).subscribe({
      next:(response)=>{
        this.cartDetails=response.data;
        this.numOfTotal=response
      },
      error:(err)=> {
        console.log(err)
        
      },
    })
      
  }
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        console.log(response);
        this.cartDetails=response.data;
        this.numOfTotal=response
      }
    })
    
  }


}
