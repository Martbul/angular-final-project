import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../types/app';
@Injectable({
  providedIn: 'root',
})
export class AppServicesService {
   baseUrl= "http://localhost:5050/binds/binds";

  constructor(private http: HttpClient) { }

  getApps(){
  return this.http.get<App[]>(this.baseUrl)
  }
}
