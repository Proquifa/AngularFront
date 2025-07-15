import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresionConfirmadaComponent } from './impresion-confirmada.component';

describe('ImpresionConfirmadaComponent', () => {
  let component: ImpresionConfirmadaComponent;
  let fixture: ComponentFixture<ImpresionConfirmadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpresionConfirmadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresionConfirmadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
