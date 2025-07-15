import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGrisPalomitaVerdeComponent } from './check-gris-palomita-verde.component';

describe('CheckGrisPalomitaVerdeComponent', () => {
  let component: CheckGrisPalomitaVerdeComponent;
  let fixture: ComponentFixture<CheckGrisPalomitaVerdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckGrisPalomitaVerdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGrisPalomitaVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
