import { Component } from '@angular/core';
import { UserService } from 'src/app/components/user/user-auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  get isLoggedIn() {
    return this.userAuthService.isLoggedIn;
  }

  get user() {
    return this.userAuthService.userFromLocaleStorage;
  }
constructor(private userAuthService: UserService){}
}
