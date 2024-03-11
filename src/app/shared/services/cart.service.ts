import { product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient :HttpClient) { }
  headers:any ={token : localStorage.getItem('etoken')}
  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
    {productId: productId}
    )
  }
  getUserCart():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart` 
     
    )
  }
  removeItem(productId:string):Observable<any>{
  return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}` , 
  )}
  updateCart(productId:string , count:number ):Observable<any>{
    return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}` ,
    {count:count}
    
    )

  }
  checkOut(cartId:string ,userData:object):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shippingAddress:userData
  }
  )
  }
}
