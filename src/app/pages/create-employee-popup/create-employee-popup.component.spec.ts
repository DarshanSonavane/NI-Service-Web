import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeePopupComponent } from './create-employee-popup.component';

describe('CreateEmployeePopupComponent', () => {
  let component: CreateEmployeePopupComponent;
  let fixture: ComponentFixture<CreateEmployeePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeePopupComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
