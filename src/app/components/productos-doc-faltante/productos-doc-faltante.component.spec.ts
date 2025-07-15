import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDocFaltanteComponent } from './productos-doc-faltante.component';

describe('ProductosDocFaltanteComponent', () => {
  let component: ProductosDocFaltanteComponent;
  let fixture: ComponentFixture<ProductosDocFaltanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosDocFaltanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosDocFaltanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
