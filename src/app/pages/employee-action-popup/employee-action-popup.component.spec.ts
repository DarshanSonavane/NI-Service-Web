import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeActionPopupComponent } from './employee-action-popup.component';

describe('EmployeeActionPopupComponent', () => {
  let component: EmployeeActionPopupComponent;
  let fixture: ComponentFixture<EmployeeActionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeActionPopupComponent]
    });
    fixture = TestBed.createComponent(EmployeeActionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
