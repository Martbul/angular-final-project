import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(public userAuthService:UserService){}
ngOnInit(): void {
//   const user:any = localStorage.getItem('auth');
//   console.log(user);
  
//  this.userAuthService.user = user

  // return this.userAuthService.userFromLocaleStorage;

}
}
