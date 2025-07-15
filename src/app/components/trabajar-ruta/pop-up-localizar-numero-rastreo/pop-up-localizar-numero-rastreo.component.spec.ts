import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpLocalizarNumeroRastreoComponent } from './pop-up-localizar-numero-rastreo.component';

describe('PopUpLocalizarNumeroRastreoComponent', () => {
  let component: PopUpLocalizarNumeroRastreoComponent;
  let fixture: ComponentFixture<PopUpLocalizarNumeroRastreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpLocalizarNumeroRastreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpLocalizarNumeroRastreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
