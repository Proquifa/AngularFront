import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSaldosComponent } from './pop-up-saldos.component';

describe('PopUpSaldosComponent', () => {
  let component: PopUpSaldosComponent;
  let fixture: ComponentFixture<PopUpSaldosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpSaldosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
