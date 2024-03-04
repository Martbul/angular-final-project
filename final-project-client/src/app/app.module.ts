import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './components/about/about.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    TestemonialsComponent,
    FAQsComponent,
    ServicesComponent,
    AboutComponent,
    OurservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
