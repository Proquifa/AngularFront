import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNotificadoDesvincularComponent } from './pop-up-notificado-desvincular.component';

describe('PopUpNotificadoDesvincularComponent', () => {
  let component: PopUpNotificadoDesvincularComponent;
  let fixture: ComponentFixture<PopUpNotificadoDesvincularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpNotificadoDesvincularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpNotificadoDesvincularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
