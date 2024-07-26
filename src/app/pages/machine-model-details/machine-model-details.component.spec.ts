import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineModelDetailsComponent } from './machine-model-details.component';

describe('MachineModelDetailsComponent', () => {
  let component: MachineModelDetailsComponent;
  let fixture: ComponentFixture<MachineModelDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineModelDetailsComponent]
    });
    fixture = TestBed.createComponent(MachineModelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
