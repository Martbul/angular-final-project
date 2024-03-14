import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from 'src/app/types/app';

@Injectable({
  providedIn: 'root'
})
export class EditAppService {

  constructor(private http: HttpClient) { }

  editApp(appData: App, appId:any) {
    console.log(appData);
    this.http.put<any>(`http://localhost:5050/app-finder/edit/${appId}`, appData, appId).subscribe(
      data => console.log('Success!', data),
      error => console.error('Error:', error)
    );
    
      
  }

 
}
