import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEscanearPedimentoComponent } from './vista-escanear-pedimento.component';

describe('VistaEscanearPedimentoComponent', () => {
  let component: VistaEscanearPedimentoComponent;
  let fixture: ComponentFixture<VistaEscanearPedimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEscanearPedimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEscanearPedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
