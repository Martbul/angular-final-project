import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { App } from 'src/app/types/app';
import { DetailsService } from './details.service';
import { UserService } from '../../user/user-auth.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css'],
})
export class AppDetailsComponent implements OnInit {
  app = {} as App;

  currentUser!: any
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private detailsService:DetailsService,
    private userAuthService:UserService
  ) { }

  ngOnInit(): void {
    //subscribing to changes in the route parametars(When the route parameters change, it triggers the callback function with the new data. )
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];
console.log(id);

this.currentUser = this.userAuthService.userFromLocaleStorage.username

      this.apiService.getSingleApp(id).subscribe((app) => {
        this.app = app;
        console.log(this.app);
        
      });
    });
  }


  deleteApp(){

    
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];
console.log(id);

      this.detailsService.deleteApp(id)
    });
  }

}