import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionEstrellaComponent } from './calificacion-estrella.component';

describe('CalificacionEstrellaComponent', () => {
  let component: CalificacionEstrellaComponent;
  let fixture: ComponentFixture<CalificacionEstrellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionEstrellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionEstrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
