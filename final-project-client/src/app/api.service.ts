import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './enviroments/enviroments';
import { App } from './types/app';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  constructor(private http: HttpClient) {}

  getSingleApp(id: string) {
    console.log(id);
    
    const { apiUrl } = environment;
    console.log(apiUrl);
    
    return this.http.get<App>(`${apiUrl}/app-finder/${id}`);
  }



  
}
