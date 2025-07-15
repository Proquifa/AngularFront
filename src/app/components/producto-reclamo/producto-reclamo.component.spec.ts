import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoReclamoComponent } from './producto-reclamo.component';

describe('ProductoReclamoComponent', () => {
  let component: ProductoReclamoComponent;
  let fixture: ComponentFixture<ProductoReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
