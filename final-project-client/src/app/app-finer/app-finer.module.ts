import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFinerRoutingModule } from './app-finer-routing.module';
import { AppCardComponent } from './app-card/app-card.component';
import { AppFinderComponent } from './app-finder-page/app-finder.component';
import { FormsModule } from '@angular/forms';
import { AppDetailsComponent } from './app-details/app-details.component';

@NgModule({
  declarations: [AppCardComponent, AppFinderComponent, AppDetailsComponent],
  imports: [CommonModule, AppFinerRoutingModule, FormsModule,],
})
export class AppFinerModule {}
