import { Component } from '@angular/core';
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

  fetchApps() {
    this.appService.getApps().subscribe((apps) => {
      this.apps = apps;
      console.log(this.apps);
    });
  }
}
