import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBoComponent } from './productos-bo.component';

describe('ProductosBoComponent', () => {
  let component: ProductosBoComponent;
  let fixture: ComponentFixture<ProductosBoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosBoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
