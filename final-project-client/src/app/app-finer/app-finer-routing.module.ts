import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailsComponent } from './app-details/app-details.component';
import { AppFinderComponent } from './app-finder-page/app-finder.component';
import { AuthActivate } from '../shared/guards/auth.activate';
import { AppEditComponent } from './app-edit/app-edit.component';

const routes: Routes = [
  {
    path: 'app-finder',
    component: AppFinderComponent,
  },
  {
    path: 'app-finder',
    children: [{ path: ':appId', component: AppDetailsComponent }],
  },

  {
    path: 'app-finder/edit/:appId',
    component: AppEditComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Edit-App',
      loginRequired: true,
    },
  },

  {
    path: 'app-finder/delete/:appId',
    redirectTo: '/app-finder',
    data: {
      title: 'delete-app',
      loginRequired: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFinerRoutingModule {}
