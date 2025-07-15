import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionOeComponent } from './informacion-oe.component';

describe('InformacionOeComponent', () => {
  let component: InformacionOeComponent;
  let fixture: ComponentFixture<InformacionOeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionOeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionOeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
