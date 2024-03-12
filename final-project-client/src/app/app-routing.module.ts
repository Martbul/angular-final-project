
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AboutComponent } from './components/about/about.component';
import { AppFinderComponent } from './components/app-finer/app-finder-page/app-finder.component';
import { CustomerOnboardingChatbotServiceComponent } from './components/customer-onboarding-chatbot-service/customer-onboarding-chatbot-service.component';
import { EmployeeTrainingChatbotServiceComponent } from './components/employee-training-chatbot-service/employee-training-chatbot-service.component';
import { CustomerSupportChatbotServiceComponent } from './components/customer-support-chatbot-service/customer-support-chatbot-service.component';
import { CreateAppComponent } from './components/post-app/create-app/create-app.component';
import { AppEditComponent } from './components/app-finer/app-edit/app-edit.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { AuthActivate } from './components/guards/auth.activate';

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
  },
  {
    path: 'app-finder/edit/:appId',
    component: AppEditComponent,
  },

  {
    path: 'app-finder/delete/:appId',
    redirectTo: '/app-finder',
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'logout',
      loginRequired: true,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
