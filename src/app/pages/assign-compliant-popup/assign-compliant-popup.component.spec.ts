import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCompliantPopupComponent } from './assign-compliant-popup.component';

describe('AssignCompliantPopupComponent', () => {
  let component: AssignCompliantPopupComponent;
  let fixture: ComponentFixture<AssignCompliantPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignCompliantPopupComponent]
    });
    fixture = TestBed.createComponent(AssignCompliantPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
