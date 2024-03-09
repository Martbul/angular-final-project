import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDetailsComponent } from './app-details/app-details.component';

import { AppFinerRoutingModule } from './app-finer-routing.module';
import { AppCardComponent } from './app-card/app-card.component';
import { AppFinderComponent } from './app-finder-page/app-finder.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppDetailsComponent,AppDetailsComponent,AppCardComponent, AppFinderComponent],
  imports: [CommonModule, AppFinerRoutingModule, FormsModule,],
})
export class AppFinerModule {}
