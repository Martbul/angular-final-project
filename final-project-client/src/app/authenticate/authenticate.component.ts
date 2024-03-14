
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user-auth.service';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;
  constructor(private userAuthService: UserService) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.userAuthService.getProfile().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: (error) => {
        console.log('Error occurred:', error);
        this.isAuthenticating = false;
      },
    });
  }
}
