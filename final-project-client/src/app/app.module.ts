import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigatio/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';
import { FAQsComponent } from './components/faqs/faqs.component';

import { AboutComponent } from './components/about/about.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AppFinderComponent } from './components/app-finder/app-finder.component';
import { AlystServicesComponent } from './components/alyst-services/alyst-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppFinderComponent,
    AlystServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
