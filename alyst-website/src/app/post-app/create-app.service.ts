import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroments';
import { App } from 'src/app/types/app';
import { UserService } from '../user/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CreateAppService {
  constructor(private http: HttpClient, private userAuthService: UserService) { }

  // createApp(appData:any){
  //   console.log(appData);

  //   const { apiUrl } = environment;

  //  console.log( this.http.post<any>(`http://localhost:5050/create-app`,appData));

  // }

  createApp(appData: any, creatorEmail: string) {
    console.log(appData);
    appData.creatorEmail = creatorEmail;

    this.http.post<any>('http://localhost:5050/create-app', appData, ).subscribe(
      (data) => console.log('Success!', data),
      (error) => console.error('Error:', error)
    );
  }

}