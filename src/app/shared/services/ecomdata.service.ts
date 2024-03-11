import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor(private _HttpClient:HttpClient) { }
  getAllproducts():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products`)
  }
  getCategories():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }
  getBrand():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
  }
  getDetailsProduct(id:string):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }
}