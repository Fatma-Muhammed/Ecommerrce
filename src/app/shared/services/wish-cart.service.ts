import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishCartService {

  constructor(private _HttpClient:HttpClient) { }
  headers:any ={token : localStorage.getItem('etoken')}
  addToWishList(productId:string):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/wishlist`,
    {productId: productId} , {
      headers: this.headers
    }
    )
  }
  getUserWishList():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/wishlist`,
    {
      headers:this.headers
    }
    )
  }
  removeItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/wishlist/${productId}` , 
    {
      headers:this.headers
    })}
}
