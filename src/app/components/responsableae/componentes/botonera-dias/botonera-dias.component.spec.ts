import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraDiasComponent } from './botonera-dias.component';

describe('BotoneraDiasComponent', () => {
  let component: BotoneraDiasComponent;
  let fixture: ComponentFixture<BotoneraDiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraDiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
