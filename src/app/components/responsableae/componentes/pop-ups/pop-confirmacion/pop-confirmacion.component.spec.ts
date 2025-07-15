import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopConfirmacionComponent } from './pop-confirmacion.component';

describe('PopConfirmacionComponent', () => {
  let component: PopConfirmacionComponent;
  let fixture: ComponentFixture<PopConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
