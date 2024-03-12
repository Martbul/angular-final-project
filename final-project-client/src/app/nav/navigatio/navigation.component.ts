import { Component } from '@angular/core';
import { UserService } from 'src/app/components/user/user-auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private userAuthService: UserService) { }
  userForVavRerender!:any
  get isLoggedIn(): boolean {
    return this.userAuthService.isLoggedIn;
  }

  get user() {
   this.userForVavRerender= this.userAuthService.userFromLocaleStorage;
    return this.userAuthService.userFromLocaleStorage;
  }
}
