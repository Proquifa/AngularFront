import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonSinLabelComponent } from './radio-button-sin-label.component';

describe('RadioButtonSinLabelComponent', () => {
  let component: RadioButtonSinLabelComponent;
  let fixture: ComponentFixture<RadioButtonSinLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonSinLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonSinLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
