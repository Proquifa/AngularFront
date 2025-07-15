import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpExitoComponent } from './pop-up-exito.component';

describe('PopUpExitoComponent', () => {
  let component: PopUpExitoComponent;
  let fixture: ComponentFixture<PopUpExitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpExitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
