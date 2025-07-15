import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarRutasComponent } from './trabajar-rutas.component';

describe('TrabajarRutasComponent', () => {
  let component: TrabajarRutasComponent;
  let fixture: ComponentFixture<TrabajarRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajarRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajarRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
