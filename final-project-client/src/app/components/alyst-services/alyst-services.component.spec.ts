import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlystServicesComponent } from './alyst-services.component';

describe('AlystServicesComponent', () => {
  let component: AlystServicesComponent;
  let fixture: ComponentFixture<AlystServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlystServicesComponent]
    });
    fixture = TestBed.createComponent(AlystServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
