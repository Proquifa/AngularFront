import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopEscanearQrComponent } from './pop-escanear-qr.component';

describe('PopEscanearQrComponent', () => {
  let component: PopEscanearQrComponent;
  let fixture: ComponentFixture<PopEscanearQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopEscanearQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopEscanearQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
