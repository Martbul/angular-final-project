import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerOnboardingChatbotServiceComponent } from './components/customer-onboarding-chatbot-service/customer-onboarding-chatbot-service.component';
import { EmployeeTrainingChatbotServiceComponent } from './components/employee-training-chatbot-service/employee-training-chatbot-service.component';
import { CustomerSupportChatbotServiceComponent } from './components/customer-support-chatbot-service/customer-support-chatbot-service.component';
import { ThanksForPostedAppComponent } from './thanks-for-posted-app/thanks-for-posted-app.component';
import { ErrorComponent } from './components/404/404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomepageComponent },

  {
    path: 'services',
    component: OurservicesComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'thanks-posted-app',
    component: ThanksForPostedAppComponent,
  },

  {
    path: 'services/customeronboardingchatbot',
    pathMatch: 'full',
    component: CustomerOnboardingChatbotServiceComponent,
  },

  {
    path: 'services/employeetrainingchatbot',
    component: EmployeeTrainingChatbotServiceComponent,
  },

  {
    path: 'services/customersupportchatbot',
    component: CustomerSupportChatbotServiceComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  {
    path: 'app-finder',
    loadChildren: () =>
      import('./app-finer/app-finer.module').then((m) => m.AppFinerModule),
  },
  {
    path: 'post-app',
    loadChildren: () =>
      import('./post-app/post-app.module').then((m) => m.PostAppModule),
  },

  //  { path: '**', redirectTo: '/not-found' },
  //  { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
