import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/components/user/user-auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent  {
  constructor(private userAuthService: UserService, private router: Router) {}
  userForVavRerender!: any;
  navType: String = 'NOTloggedIN';
    test:boolean = false
  // public changeNav(): void {
  //   console.log('heere');
    
  //   this.userForVavRerender = this.userAuthService.userFromLocaleStorage;
  //   this.router.events.subscribe((val: any) => {
  //     if (val.url) {
  //       if (this.userForVavRerender) {
  //         this.navType = 'loggedIN';
  //       } else {
  //         this.navType = 'NOTloggedIN';
  //       }
  //     }
  //   });
  // }

  // public changeNav(): void {
  //   console.log('here');
    
  //     this.test= true
  // }
  get isLoggedIn(): boolean {
    return this.userAuthService.isLoggedIn;
  }

  get user() {
    this.userForVavRerender = this.userAuthService.userFromLocaleStorage;
    return this.userAuthService.user;
  }
}
