import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompliantListComponent } from './employee-compliant-list.component';

describe('EmployeeCompliantListComponent', () => {
  let component: EmployeeCompliantListComponent;
  let fixture: ComponentFixture<EmployeeCompliantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCompliantListComponent]
    });
    fixture = TestBed.createComponent(EmployeeCompliantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
