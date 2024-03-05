import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFinderComponent } from './app-finder.component';

describe('AppFinderComponent', () => {
  let component: AppFinderComponent;
  let fixture: ComponentFixture<AppFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFinderComponent]
    });
    fixture = TestBed.createComponent(AppFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
