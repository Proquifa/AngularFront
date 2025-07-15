import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMedidasComponent } from './pop-up-medidas.component';

describe('PopUpMedidasComponent', () => {
  let component: PopUpMedidasComponent;
  let fixture: ComponentFixture<PopUpMedidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpMedidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
