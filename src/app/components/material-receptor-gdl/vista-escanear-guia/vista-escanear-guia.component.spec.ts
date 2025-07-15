import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEscanearGuiaComponent } from './vista-escanear-guia.component';

describe('VistaEscanearGuiaComponent', () => {
  let component: VistaEscanearGuiaComponent;
  let fixture: ComponentFixture<VistaEscanearGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEscanearGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEscanearGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
