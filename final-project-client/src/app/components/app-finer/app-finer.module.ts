import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDetailsComponent } from './app-details/app-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppFinerRoutingModule } from './app-finer-routing.module';
import { AppCardComponent } from './app-card/app-card.component';
import { AppFinderComponent } from './app-finder-page/app-finder.component';

@NgModule({
  declarations: [AppDetailsComponent, SearchBarComponent,AppDetailsComponent,AppCardComponent, AppFinderComponent],
  imports: [CommonModule, AppFinerRoutingModule],
})
export class AppFinerModule {}
