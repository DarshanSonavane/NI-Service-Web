import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningIndicatorComponent } from './spinning-indicator.component';

describe('SpinningIndicatorComponent', () => {
  let component: SpinningIndicatorComponent;
  let fixture: ComponentFixture<SpinningIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinningIndicatorComponent]
    });
    fixture = TestBed.createComponent(SpinningIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
