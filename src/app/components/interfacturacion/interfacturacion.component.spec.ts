import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacturacionComponent } from './interfacturacion.component';

describe('InterfacturacionComponent', () => {
  let component: InterfacturacionComponent;
  let fixture: ComponentFixture<InterfacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
