import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroments';
import { App } from 'src/app/types/app';

@Injectable({
  providedIn: 'root'
})
export class CreateAppService {

  constructor(private http: HttpClient) { }

  // createApp(appData:any){
  //   console.log(appData);
    
  //   const { apiUrl } = environment;
  
  //  console.log( this.http.post<any>(`http://localhost:5050/create-app`,appData));
   
  // }


  createApp(appData: App) {
    console.log(appData);
    this.http.post<any>("http://localhost:5050/create-app", appData).subscribe(
      data => console.log('Success!', data),
      error => console.error('Error:', error)
    );
    
      
  }
}
