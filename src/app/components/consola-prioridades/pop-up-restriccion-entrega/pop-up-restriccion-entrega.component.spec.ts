import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRestriccionEntregaComponent } from './pop-up-restriccion-entrega.component';

describe('PopUpRestriccionEntregaComponent', () => {
  let component: PopUpRestriccionEntregaComponent;
  let fixture: ComponentFixture<PopUpRestriccionEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpRestriccionEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpRestriccionEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
