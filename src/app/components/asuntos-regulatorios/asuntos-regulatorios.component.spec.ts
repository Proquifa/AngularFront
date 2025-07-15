import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuntosRegulatoriosComponent } from './asuntos-regulatorios.component';

describe('AsuntosRegulatoriosComponent', () => {
  let component: AsuntosRegulatoriosComponent;
  let fixture: ComponentFixture<AsuntosRegulatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuntosRegulatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuntosRegulatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
