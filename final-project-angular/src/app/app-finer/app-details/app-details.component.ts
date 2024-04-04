import { Component, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { App } from 'src/app/types/app';
import { DetailsService } from './details.service';

import { AppServicesService } from 'src/app/app-finer/app-services.service';
import { UserService } from 'src/app/user/user-auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css'],
})
export class AppDetailsComponent implements OnInit, OnChanges {
  app = {} as App;
  userEmail!: any;
  currentUser!: any;
  currentUserBoughtApps!: any;
  currentAppLikes!: any;
  renderTrigger: boolean = false;
  boughtApp = false;
  liked!: boolean;

  numberOfLikes!: number;
  currentFullUser!: any;
  subscription!: Subscription;
  userLIKEDAPPS!: any;

  logedUser= true
  constructor(
    private activeRoute: ActivatedRoute,
    private detailsService: DetailsService,
    private userAuthService: UserService,
    private appService: AppServicesService
  ) {
    console.log(this.userAuthService.user2);
  }

  //   ngOnInit(): void {

  //  this.subscription = this.userAuthService.getProfile().subscribe((USER) => {
  //    this.currentFullUser = USER;
  //    console.log(USER.appsLiked);

  //      //subscribing to changes in the route parametars(When the route parameters change, it triggers the callback function with the new data. )
  //     this.activeRoute.params.subscribe((data) => {

  //       const id = data['appId'];
  //       console.log(id);

  //       this.appService.getSingleApp(id).subscribe((app) => {
  //         this.app = app;
  //         this.currentAppLikes = this.app.likes;
  //         console.log(this.app);
  //         this.currentUser = this.userAuthService.userFromLocaleStorage.username;
  //         this.currentUserBoughtApps = this.userAuthService.user.appsBought;
  //         this.userEmail = this.userAuthService.userFromLocaleStorage.email;
  //         this.userLIKEDAPPS = this.userAuthService.user.appsLiked;

  //         console.log(this.subscription);

  //         console.log(this.userAuthService.user.appsLiked);
  //         console.log(this.app.title);
  //         this.numberOfLikes = this.app.likes;

  //         console.log(this.currentFullUser);
  // console.log(this.currentFullUser.appsLiked);
  //         if (this.currentFullUser.appsLiked.inculdes(this.app.title)) {
  //           this.liked = true;
  //         } else {
  //           this.liked = false;
  //         }

  //         console.log(this.liked);

  //       });
  //     });
  //     this.isBought();
  //  });

  //   }

  ngOnInit(): void {
    this.userAuthService.getProfile().subscribe({
      next: (user) => {
        console.log(user);
        this.currentUser = user.username
        console.log(this.currentUser);
        
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
    });

   
    
    if (this.userAuthService.user! == undefined) {
      this.logedUser = false
    }

    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];

      this.appService.getSingleApp(id).subscribe((app) => {
        this.app = app;
        this.numberOfLikes = this.app.likes;

        const userLikedAppsArr = this.userAuthService.user!.appsLiked;
        const userBoughtAppsArr = this.userAuthService.user!.appsBought;
        if (userLikedAppsArr.includes(this.app.title)) {
          
          this.liked = true;
          
        } else {
          this.liked = false;
        
        }


         if (userBoughtAppsArr.includes(this.app.title)) {
        
           this.boughtApp = true;
          
         } else {
           this.boughtApp = false;
        
         }
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  deleteApp() {
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];
      console.log(id);

      this.detailsService.deleteApp(id);
    });
  }

  addLike() {
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];

      this.userEmail = this.userAuthService.userFromLocaleStorage.email;
      this.appService.like(this.userEmail, id);

      this.numberOfLikes++;
      this.liked = true;

      this.userAuthService.getProfile().subscribe({
        next: (user) => {
          console.log(user);
        },
        error: (error) => {
          console.log('Error occurred:', error);
        },
      });
    });
  }

  // subtractLike() {
  //   this.activeRoute.params.subscribe((data) => {
  //     const id = data['appId'];

  //     this.userEmail = this.userAuthService.userFromLocaleStorage.email;
  //     this.appService.like(this.userEmail, id);

  //     this.numberOfLikes--;
  //     this.liked = false;

  //     this.userAuthService.getProfile().subscribe({
  //       next: (user) => {
  //         console.log(user);
  //       },
  //       error: (error) => {
  //         console.log('Error occurred:', error);
  //       },
  //     });
  //   });
  // }

  buy() {
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];

      this.userEmail = this.userAuthService.userFromLocaleStorage.email;
      this.appService.buy(this.userEmail, id);
    });


    this.boughtApp = true;


     this.userAuthService.getProfile().subscribe({
       next: (user) => {
         console.log(user);
       },
       error: (error) => {
         console.log('Error occurred:', error);
       },
     });

    
    
  }
}
