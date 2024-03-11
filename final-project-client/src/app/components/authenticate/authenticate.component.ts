import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  //! isAuthenticating = true; samo za test sym go slojil na false -  varni go!!!
  isAuthenticating = false;
constructor(private userAuthService:UserService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.userAuthService.getProfile().subscribe({
    next: ()=>{
      this.isAuthenticating = false;
    },
    error: () => {
      this.isAuthenticating = false;
    },
    complete: () => {
      this.isAuthenticating = false;
  }
})

}
}
