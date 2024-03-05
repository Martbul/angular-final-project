import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AboutComponent } from './components/about/about.component';
import { AppFinderComponent } from './components/app-finder/app-finder.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },

  {
    path: 'services',
    component: OurservicesComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'app-finder',
    component: AppFinderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
