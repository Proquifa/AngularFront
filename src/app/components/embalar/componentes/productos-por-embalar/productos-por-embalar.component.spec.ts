import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosPorEmbalarComponent } from './productos-por-embalar.component';

describe('ProductosPorEmbalarComponent', () => {
  let component: ProductosPorEmbalarComponent;
  let fixture: ComponentFixture<ProductosPorEmbalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosPorEmbalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPorEmbalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
