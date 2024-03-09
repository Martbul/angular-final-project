import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { App } from 'src/app/types/app';

@Component({
  selector: 'app-app-edit',
  templateUrl: './app-edit.component.html',
  styleUrls: ['./app-edit.component.css']
})
export class AppEditComponent implements OnInit {
  app = {} as App;
  title !:string
  price!:string
  imgUrl!:string
  description!:string
  category!:string
  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //subscribing to changes in the route parametars(When the route parameters change, it triggers the callback function with the new data. )
    this.activeRoute.params.subscribe((data) => {
      const id = data['appId'];
console.log(id);

      this.apiService.getSingleApp(id).subscribe((app) => {
        this.app = app;
        this.title = this.app.title
        this.price = this.app.price
        this.description = this.app.description
        this.imgUrl = this.app.imgUrl
        this.category = this.app.category

        console.log(this.app.title);
        
      });
    });
  }

  

  handleEdit(form:NgForm){

  }
}
