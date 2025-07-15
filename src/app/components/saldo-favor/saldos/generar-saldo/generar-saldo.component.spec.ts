import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarSaldoComponent } from './generar-saldo.component';

describe('GenerarSaldoComponent', () => {
  let component: GenerarSaldoComponent;
  let fixture: ComponentFixture<GenerarSaldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarSaldoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
