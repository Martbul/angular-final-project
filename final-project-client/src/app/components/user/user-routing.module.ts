import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthActivate } from '../shared/guards/auth.activate';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: RegisterComponent },
  //   { path: 'logout', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      loginRequired: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}