import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { App } from 'src/app/types/app';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css'],
})
export class AppDetailsComponent implements OnInit {
  app = {} as App;

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['themeId'];

       this.apiService.getTheme(id).subscribe((theme) => {
        this.theme = theme;
    })
  }
}