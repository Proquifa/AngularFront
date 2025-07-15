import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionNivelPiezaComponent } from './inspeccion-nivel-pieza.component';

describe('InspeccionNivelPiezaComponent', () => {
  let component: InspeccionNivelPiezaComponent;
  let fixture: ComponentFixture<InspeccionNivelPiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspeccionNivelPiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionNivelPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
