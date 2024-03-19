import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }


  deleteApp(appId:any){

     this.http.delete<any>(`http://localhost:5050/app-finder/delete/${appId}`, appId).subscribe(
      data => console.log('Success!', data),
      error => console.error('Error:', error)
    );
  }
}
