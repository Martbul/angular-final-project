import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFinerRoutingModule } from './app-finer-routing.module';
import { AppCardComponent } from './app-card/app-card.component';
import { AppFinderComponent } from './app-finder-page/app-finder.component';
import { FormsModule } from '@angular/forms';
import { AppDetailsComponent } from './app-details/app-details.component';
import { RouterModule } from '@angular/router';
import { AppEditComponent } from './app-edit/app-edit.component';
import { AppDetails2Component } from './app-details-copy/app-details.component';
import { AuthenticateComponent } from '../authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppCardComponent,
    AppFinderComponent,
    AppDetailsComponent,
    AppEditComponent,
    AppDetails2Component,
    
  ],
  imports: [
    CommonModule,
    AppFinerRoutingModule,
    FormsModule,
    RouterModule,
    
  ],
})
export class AppFinerModule {}
