import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderCobroDepositoComponent } from './atender-cobro-deposito.component';

describe('AtenderCobroDepositoComponent', () => {
  let component: AtenderCobroDepositoComponent;
  let fixture: ComponentFixture<AtenderCobroDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtenderCobroDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenderCobroDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
