import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)

  params=new HttpParams()
  //.set('secret',environment.secret)
  //.set('client',environment.client)


  headerall=new HttpHeaders()
  .set('authorization',this.token)
  constructor(private http:HttpClient) { }



  getAllstudents(){
    return this.http.get(`${environment.urlBackend}`+'api/Command/',{headers:this.headerall,params:this.params})
  }
  getAllProductbydeparmtent(profil:any){
    return this.http.get(`${environment.urlBackend}`+'api/products/'+profil,{headers:this.headerall,params:this.params})
  }
  getAllProduct(){
    return this.http.get(`${environment.urlBackend}`+'api/products',{headers:this.headerall,params:this.params})
  }
  
  addstudent(profile:any){

    return this.http.post(environment.urlBackend+'api/Command/',profile,{headers:this.headerAdmin,params:this.params})

  }

  deletestudent(id:any){
    return this.http.delete(environment.urlBackend+'api/Command/'+id,{headers:this.headerAdmin,params:this.params})
  }
  updateStudent(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'api/Command/'+id,newprofile,{headers:this.headerAdmin,params:this.params})

  }
  updateProduct(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'api/products/'+id,newprofile,{headers:this.headerAdmin,params:this.params})
  }
  getProduct(id:any){
    
    return this.http.get(environment.urlBackend+'api/products/'+id,{headers:this.headerall,params:this.params})
  }
  getOnestudent(id:any){
    
    return this.http.get(environment.urlBackend+'student/'+id,{headers:this.headerall,params:this.params})
  }
  addQuantity(profile:any){
    return this.http.post(environment.urlBackend+'api/detailProduct/',profile,{headers:this.headerAdmin,params:this.params})
  }
  getQuantity(){
    
    return this.http.get(environment.urlBackend+'api/detailProduct/',{headers:this.headerall,params:this.params})
  }
  getDetails(idProduct:any){
    
    return this.http.get(environment.urlBackend+'api/detailProduct/'+idProduct,{headers:this.headerall,params:this.params})
  }
  gettest(){
    return this.http.get(environment.urlBackend+'api/test',{headers:this.headerall,params:this.params})
  }
  addnotification(notification:any){
    return this.http.post(environment.urlBackend+'api/notification/',notification,{headers:this.headerAdmin,params:this.params})
  }
 
  deletenotification(codeOracle:any){
    return this.http.delete(environment.urlBackend+'api/notification/'+codeOracle,{headers:this.headerAdmin,params:this.params})
  }
  getnotification(dep:any){
    return this.http.get(environment.urlBackend+'api/notification/'+dep,{headers:this.headerAdmin,params:this.params})

  }
  getUsers(){
    return this.http.get(environment.urlBackend+'api/user/users',{headers:this.headerAdmin,params:this.params})

  }
  addproduct(product:any){
    return this.http.post(environment.urlBackend+'api/products/',product,{headers:this.headerAdmin,params:this.params})

  }
  addResponse(response:any){
    return this.http.post(environment.urlBackend+'api/response',response,{headers:this.headerAdmin,params:this.params})

  }
  updateResponse(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'api/response/'+id,newprofile,{headers:this.headerAdmin,params:this.params})
  }
  checkResponse(id:any){
    return this.http.get(environment.urlBackend+'api/response/'+id,{headers:this.headerall,params:this.params})
  }
  importxlsx(file: File){
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.urlBackend+'api/products/import', formData, {headers:this.headerall,params:this.params})
  }
  deleteProduct(id:any){
    return this.http.delete(environment.urlBackend+'api/products/'+id,{headers:this.headerAdmin,params:this.params})
  }
}
  
  


