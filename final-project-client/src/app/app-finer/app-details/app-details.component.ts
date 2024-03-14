import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { App } from 'src/app/types/app';
import { DetailsService } from './details.service';

import { AppServicesService } from 'src/app/app-finer/app-services.service';
import { UserService } from 'src/app/user/user-auth.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css'],
})
export class AppDetailsComponent implements OnInit {
  app = {} as App;
  userEmail!: any;
  currentUser!: any;
  currentUserBoughtApps!: any;
  currentAppLikes!: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private detailsService: DetailsService,
    private userAuthService: UserService,
    private appService: AppServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //subscribing to changes in the route parametars(When the route parameters change, it triggers the callback function with the new data. )
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];
      console.log(id);

      this.appService.getSingleApp(id).subscribe((app) => {
        this.app = app;
        this.currentAppLikes = this.app.likes;
        console.log(this.app);
        this.currentUser = this.userAuthService.userFromLocaleStorage.username;
        this.currentUserBoughtApps = this.userAuthService.user.appsBought;
        this.userEmail = this.userAuthService.userFromLocaleStorage.email;
      });
    });
  }

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

      this.appService.getSingleApp(id).subscribe((app) => {
        let app1 = app;
        this.currentAppLikes = app1.likes;
        console.log(this.app.likes);
      });
      //this.router.navigate([`/app-finder/${id}`]);
    });

    //! tova e vremenno resheni, nameri nachin da rerendernesh componenta

    // window.location.reload();
  }

  buy() {
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];

      this.userEmail = this.userAuthService.userFromLocaleStorage.email;
      this.appService.buy(this.userEmail, id);

      //this.router.navigate([`/app-finder/${id}`]);
    });

    //! tova e vremenno resheni, nameri nachin da rerendernesh componenta
    window.location.reload();
  }
}
