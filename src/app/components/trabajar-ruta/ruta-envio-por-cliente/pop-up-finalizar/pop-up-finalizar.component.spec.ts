import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFinalizarComponent } from './pop-up-finalizar.component';

describe('PopUpFinalizarComponent', () => {
  let component: PopUpFinalizarComponent;
  let fixture: ComponentFixture<PopUpFinalizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpFinalizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
