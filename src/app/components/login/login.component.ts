import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msgError:string='';
  constructor(private _AuthService:AuthService , private _Router:Router){}
  loginForm:FormGroup=new FormGroup({
    email:new FormControl('' ,[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
  })
  handleForm():void{
    if(this.loginForm.valid){
      this._AuthService.setLogin(this.loginForm.value).subscribe({
        next:(response)=>{
          if(response.message =='success'){
            localStorage.setItem('etoken',response.token)
            this._AuthService.saveUserData();

            this._Router.navigate(['/home'])

          }
        },
        error:(err:HttpErrorResponse)=>{
          this.msgError = err.error.message
        }
      })

    }
  }
}
