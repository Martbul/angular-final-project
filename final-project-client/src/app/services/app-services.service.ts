import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../types/app';

@Injectable({
  providedIn: 'root',
  
})
export class AppServicesService {
  baseUrl = 'http://localhost:5050';

  constructor(private http: HttpClient) {}

  getApps() {

    return this.http.get<App[]>(`${this.baseUrl}/app-finder`);
  }


  like(email: string, id: string) {
    console.log(email);
    console.log(id);
     this.http
       .post(`${this.baseUrl}/app-finder/like`,{email , id})
       .subscribe(
         (data) => console.log('Success!', data),
         (error) => console.error('Error:', error)
       );
    
     
  }
}
