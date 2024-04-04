import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateAppComponent } from './create-app/create-app.component';
import { CreateAppRoutingModule } from './create-app.routing.module';



@NgModule({
  declarations: [CreateAppComponent],
  imports: [CommonModule, FormsModule, RouterModule, CreateAppRoutingModule],
})
export class PostAppModule {}
