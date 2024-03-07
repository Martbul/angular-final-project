import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDetailsComponent } from './app-details/app-details.component';

const routes: Routes = [
  //   {
  //     path: 'themes',
  //     children: [
  //       { path: '', pathMatch: 'full', component: MainComponent },
  //       { path: ':themeId', component: CurrentThemeComponent },
  //     ],
  //   },
  //   {
  //     path: 'add-theme',
  //     component: AddThemeComponent,
  //     canActivate: [AuthActivate],
  //   },

  {
    path: 'app-finder',
    children: [{ path: ':appId', component: AppDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFinerRoutingModule {}
