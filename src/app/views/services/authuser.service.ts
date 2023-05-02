import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  LoggedIn() {
    throw new Error('Method not implemented.');
  }
  helper=new JwtHelperService()
  constructor(private http:HttpClient, private route:Router) { }



  register(body:any){
    return this.http.post('http://localhost:3000/api/user/register',body)
  }

  login(body:any){
    return this.http.post('http://localhost:3000/api/user/login',body)
  }


  saveToken(token:any){

    localStorage.setItem('token',token)

  }
  getProfil(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)
 
     return decodeToken.department
 
   }
   


  userLoggedIn(){

    
    
    if(!localStorage.getItem('token')){
      return false
    }
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    
    
     if(decodeToken.role){
       return false
     }

     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true


  }
}
