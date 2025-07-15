import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRestriccionComponent } from './pop-up-restriccion.component';

describe('PopUpRestriccionComponent', () => {
  let component: PopUpRestriccionComponent;
  let fixture: ComponentFixture<PopUpRestriccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpRestriccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpRestriccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
