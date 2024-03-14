import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
  import { SharedModule } from './../shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [

  CommonModule,
    UserRoutingModule, RouterModule, FormsModule,
    SharedModule
          
  ],
  exports:[]
})
export class UserModule { }
