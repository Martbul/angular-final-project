import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOnboardingChatbotServiceComponent } from './customer-onboarding-chatbot-service.component';

describe('CustomerOnboardingChatbotServiceComponent', () => {
  let component: CustomerOnboardingChatbotServiceComponent;
  let fixture: ComponentFixture<CustomerOnboardingChatbotServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOnboardingChatbotServiceComponent]
    });
    fixture = TestBed.createComponent(CustomerOnboardingChatbotServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
