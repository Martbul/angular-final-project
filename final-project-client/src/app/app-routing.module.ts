import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AboutComponent } from './components/about/about.component';
import { AppFinderComponent } from './components/app-finder/app-finder.component';
import { CustomerOnboardingChatbotServiceComponent } from './components/customer-onboarding-chatbot-service/customer-onboarding-chatbot-service.component';
import { EmployeeTrainingChatbotServiceComponent } from './components/employee-training-chatbot-service/employee-training-chatbot-service.component';
import { CustomerSupportChatbotServiceComponent } from './components/customer-support-chatbot-service/customer-support-chatbot-service.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
