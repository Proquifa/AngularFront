import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGestionProductoComponent } from './vista-gestion-producto.component';

describe('VistaGestionProductoComponent', () => {
  let component: VistaGestionProductoComponent;
  let fixture: ComponentFixture<VistaGestionProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaGestionProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaGestionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
