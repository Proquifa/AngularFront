import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPuntosComponent } from './grafica-puntos.component';

describe('GraficaPuntosComponent', () => {
  let component: GraficaPuntosComponent;
  let fixture: ComponentFixture<GraficaPuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaPuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
