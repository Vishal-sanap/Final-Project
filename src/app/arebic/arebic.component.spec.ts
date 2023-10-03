import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArebicComponent } from './arebic.component';

describe('ArebicComponent', () => {
  let component: ArebicComponent;
  let fixture: ComponentFixture<ArebicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArebicComponent]
    });
    fixture = TestBed.createComponent(ArebicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
