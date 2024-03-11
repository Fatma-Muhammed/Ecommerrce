import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private _EcomdataService:EcomdataService){}
  products:any[]=[];
  searchTerm:string=''
  ngOnInit(): void {
    this._EcomdataService.getAllproducts().subscribe({
      next:(response)=>{
        this.products=response.data
      }
    })
  }
}
