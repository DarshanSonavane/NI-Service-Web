import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderDetailPopupComponent } from './cylinder-detail-popup.component';

describe('CylinderDetailPopupComponent', () => {
  let component: CylinderDetailPopupComponent;
  let fixture: ComponentFixture<CylinderDetailPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CylinderDetailPopupComponent]
    });
    fixture = TestBed.createComponent(CylinderDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
