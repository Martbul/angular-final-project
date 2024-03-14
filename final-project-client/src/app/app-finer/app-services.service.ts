import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { App } from '../types/app';
import { environment } from '../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class AppServicesService {
  baseUrl = 'http://localhost:5050';

  constructor(private http: HttpClient) {}

  getApps() {
    return this.http.get<App[]>(`${this.baseUrl}/app-finder`);
  }

  getSingleApp(id: string) {
    console.log(id);

    const { apiUrl } = environment;
    console.log(apiUrl);

    return this.http.get<App>(`${apiUrl}/app-finder/${id}`);
  }

  like(email: string, id: string) {
    console.log(email);
    console.log(id);

    this.http.post(`${this.baseUrl}/app-finder/like`, { email, id }).subscribe(
      (data) => console.log('Success!', data),
      (error) => console.error('Error:', error)
    );
  }

  buy(email: string, id: string) {
    this.http.post(`${this.baseUrl}/app-finder/buy`, { email, id }).subscribe(
      (data) => console.log('Success!', data),
      (error) => console.error('Error:', error)
    );
  }
}
