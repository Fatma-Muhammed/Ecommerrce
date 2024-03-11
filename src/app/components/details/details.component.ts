import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService){}
  productSliderOption: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items :1,
    nav: true
  }
  productsDetails:product ={} as product
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=> {
       let idproducts:any = params.get('id')
       this._EcomdataService.getDetailsProduct(idproducts).subscribe({
        next:(response)=>{
          this.productsDetails=response.data
        }
       })
      },
    })
  }

}
