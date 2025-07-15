import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OredenesDeCompraComponent } from './oredenes-de-compra.component';

describe('OredenesDeCompraComponent', () => {
  let component: OredenesDeCompraComponent;
  let fixture: ComponentFixture<OredenesDeCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OredenesDeCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OredenesDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
