import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;

  constructor(private _HttpClient:HttpClient ,private _Router:Router) { }
  setRegister(userData:object): Observable<any>
  {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup` , userData)
  }
  setLogin(userData:object): Observable<any>
  {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin` , userData)
  }
  saveUserData(){
    if(localStorage.getItem('etoken')!=null){
      let encodeToken:any = localStorage.getItem('etoken')
      let decodetoken = jwtDecode(encodeToken);
      this.userData=decodetoken;
    }

  }
  signOutUser():void
  {
    localStorage.removeItem('etoken');
    this._Router.navigate(['/login']);

  }
}