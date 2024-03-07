import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/services/app-services.service';
import { App } from './../../../types/app';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
 apps:App[]= []
  constructor(private appService: AppServicesService) {
  }

ngOnInit(): void {
  this.fetchApps();
}
  
  
  fetchApps() {
    this.appService.getApps().subscribe((apps) => {
      this.apps = apps
      console.log(this.apps);
      
    })
  }
}
