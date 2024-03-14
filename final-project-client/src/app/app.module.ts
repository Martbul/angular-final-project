import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigatio/navigation.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { AboutComponent } from './components/about/about.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AlystServicesComponent } from './components/alyst-services/alyst-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerSupportChatbotServiceComponent } from './components/customer-support-chatbot-service/customer-support-chatbot-service.component';
import { CustomerOnboardingChatbotServiceComponent } from './components/customer-onboarding-chatbot-service/customer-onboarding-chatbot-service.component';
import { EmployeeTrainingChatbotServiceComponent } from './components/employee-training-chatbot-service/employee-training-chatbot-service.component';
import { BookACallComponent } from './components/book-a-call/book-a-call.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsLoopDirective } from './apps-loop.directive';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AppFinerModule } from './app-finer/app-finer.module';
import { AppEditComponent } from './app-finer/app-edit/app-edit.component';
import { FooterComponent } from './core/footer/footer.component';
import { UserModule } from './user/user.module';
import { LogoutComponent } from './user/logout/logout.component';
import { PostAppModule } from './post-app/post-app.module';
// import { MyRouterLinkDirective } from './my-router-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    TestemonialsComponent,
    FAQsComponent,
    AboutComponent,
    OurservicesComponent,
    AlystServicesComponent,
    CustomerSupportChatbotServiceComponent,
    CustomerOnboardingChatbotServiceComponent,
    EmployeeTrainingChatbotServiceComponent,
    BookACallComponent,

    AppsLoopDirective,
    AppEditComponent,
    LogoutComponent,
    AuthenticateComponent,
    // MyRouterLinkDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppFinerModule,
    UserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PostAppModule,
  ],
  //! appInterceptorProvider
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
