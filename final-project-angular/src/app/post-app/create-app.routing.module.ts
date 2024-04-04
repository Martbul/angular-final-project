
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../shared/guards/auth.activate';
import { CreateAppComponent } from './create-app/create-app.component';

const routes: Routes = [
  {
    path: 'create-app',
    component: CreateAppComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Create-App',
      loginRequired: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAppRoutingModule {}
