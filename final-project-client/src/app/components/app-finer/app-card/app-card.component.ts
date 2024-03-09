
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppServicesService } from 'src/app/services/app-services.service';
import { App } from 'src/app/types/app';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css'],
})
export class AppCardComponent {
  apps: App[] = [];
  constructor(private appService: AppServicesService) {}

  ngOnInit(): void {
    this.fetchApps();
  }


  fetchApps1(form?: NgForm) {
    console.log(form?.value.title);
    this.appService.getApps().subscribe((apps) => {
      if (form && form.value.title) {
        // Filter apps based on the form values
        let filteredApps = apps.filter(app => {
          return app.title.toLowerCase().includes(form.value.title.toLowerCase());
        });
        this.apps = filteredApps; // Assign filtered apps to the main apps array
      } else {
        this.apps = apps; // Set apps to all apps if form is not provided or has no value
      }
      console.log(this.apps);
    });
  }


  fetchApps(form?: NgForm) {
    console.log(form?.value.title);
    this.appService.getApps().subscribe((apps) => {
      if (form && (form.value.title || form.value.price || form.value.category)) {
        // Filter apps based on the form values
        let filteredApps = apps.filter(app => {
          const titleMatch = app.title.toLowerCase().includes(form.value.title.toLowerCase());
          const priceMatch = app.price.toString().includes(form.value.price);
          const categoryMatch = app.category.toLowerCase().includes(form.value.category.toLowerCase());
          return titleMatch && priceMatch && categoryMatch;
        });
        this.apps = filteredApps; // Assign filtered apps to the main apps array
      } else {
        this.apps = apps; // Set apps to all apps if form is not provided or has no value
      }
      console.log(this.apps);
    });
  }


  
}
