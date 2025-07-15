import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTrabajarProductosComponent } from './vista-trabajar-productos.component';

describe('VistaTrabajarProductosComponent', () => {
  let component: VistaTrabajarProductosComponent;
  let fixture: ComponentFixture<VistaTrabajarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaTrabajarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTrabajarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
