import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEstadisticasComponent } from './pop-up-estadisticas.component';

describe('PopUpEstadisticasComponent', () => {
  let component: PopUpEstadisticasComponent;
  let fixture: ComponentFixture<PopUpEstadisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEstadisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
