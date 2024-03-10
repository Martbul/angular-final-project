import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user:any| any = null;

  constructor(private http:HttpClient) { }

  register(username:string, email:string, password:string){
    return this.http.post<any>('/api/users/singup',{username, email,password});
  }

  
  login( email:string, password:string){
    return this.http.post<any>('/api/users/login',{ email,password});
  }

  logout(){
    return this.http.get<any>('/api/users/logout')
  }
}
