import { EcomdataService } from './../../shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishCartService } from 'src/app/shared/services/wish-cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService ,private _WishCartService:WishCartService){}
  categoriesSliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }
  
  products:any[]=[];
  Categories:any[]=[];
  searchTerm:string=''
  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message ,'Fresh Cart')
      }
    })
  }

  addTowishList(id:string):void{
    this._WishCartService.addToWishList(id).subscribe({
      next:(response)=>{
        console.log(response)
        this._ToastrService.success(response.message ,'Wish List')

      }
    })
      
}
  ngOnInit(): void {
    this._EcomdataService.getAllproducts().subscribe({
      next:(response)=>{
        this.products=response.data
      }
    })
    this._EcomdataService.getCategories().subscribe({
      next:(response)=>{
       this.Categories=response.data;
       console.log(response.data)
      }
    })
  }
}
