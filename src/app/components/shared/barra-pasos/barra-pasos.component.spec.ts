import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPasosComponent } from './barra-pasos.component';

describe('BarraPasosComponent', () => {
  let component: BarraPasosComponent;
  let fixture: ComponentFixture<BarraPasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
