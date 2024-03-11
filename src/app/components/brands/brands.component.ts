import { Component, OnInit } from '@angular/core';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _EcomdataService:EcomdataService){}
  products : any[]=[];
  ngOnInit(): void {
    this._EcomdataService.getBrand().subscribe({
      next:(response)=>{
        this.products=response.data
        console.log(response)
      }

    })
  }

}
