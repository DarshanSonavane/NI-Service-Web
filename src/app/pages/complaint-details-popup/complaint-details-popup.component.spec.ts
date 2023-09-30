import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDetailsPopupComponent } from './complaint-details-popup.component';

describe('ComplaintDetailsPopupComponent', () => {
  let component: ComplaintDetailsPopupComponent;
  let fixture: ComponentFixture<ComplaintDetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintDetailsPopupComponent]
    });
    fixture = TestBed.createComponent(ComplaintDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
