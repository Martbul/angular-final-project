import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AboutComponent } from './components/about/about.component';

import { CustomerOnboardingChatbotServiceComponent } from './components/customer-onboarding-chatbot-service/customer-onboarding-chatbot-service.component';
import { EmployeeTrainingChatbotServiceComponent } from './components/employee-training-chatbot-service/employee-training-chatbot-service.component';
import { CustomerSupportChatbotServiceComponent } from './components/customer-support-chatbot-service/customer-support-chatbot-service.component';

// import { CreateAppComponent } from './components/create-app/create-app.component';

import { AppFinderComponent } from './app-finer/app-finder-page/app-finder.component';
import { AppEditComponent } from './app-finer/app-edit/app-edit.component';
import { CreateAppComponent } from './post-app/create-app/create-app.component';
import { AuthActivate } from './shared/guards/auth.activate';
import { LogoutComponent } from './user/logout/logout.component';

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
    path: 'create-app',
    component: CreateAppComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Create-App',
      loginRequired: true,
    },
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
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'logout',
      loginRequired: true,
    },
  },

  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'home', component: HomepageComponent },
  // { path: '**', redirectTo: '/404' },
  // { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
