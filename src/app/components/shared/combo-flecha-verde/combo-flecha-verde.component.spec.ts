import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboFlechaVerdeComponent } from './combo-flecha-verde.component';

describe('ComboFlechaVerdeComponent', () => {
  let component: ComboFlechaVerdeComponent;
  let fixture: ComponentFixture<ComboFlechaVerdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboFlechaVerdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboFlechaVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
