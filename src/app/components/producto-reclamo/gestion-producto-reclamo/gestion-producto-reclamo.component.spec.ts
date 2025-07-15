import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductoReclamoComponent } from './gestion-producto-reclamo.component';

describe('GestionProductoReclamoComponent', () => {
  let component: GestionProductoReclamoComponent;
  let fixture: ComponentFixture<GestionProductoReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionProductoReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProductoReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
