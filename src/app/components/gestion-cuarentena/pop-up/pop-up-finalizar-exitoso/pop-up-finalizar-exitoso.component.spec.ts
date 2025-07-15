import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFinalizarExitosoComponent } from './pop-up-finalizar-exitoso.component';

describe('PopUpFinalizarExitosoComponent', () => {
  let component: PopUpFinalizarExitosoComponent;
  let fixture: ComponentFixture<PopUpFinalizarExitosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpFinalizarExitosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpFinalizarExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
