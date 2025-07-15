import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCuarentenaComponent } from './gestion-cuarentena.component';

describe('GestionCuarentenaComponent', () => {
  let component: GestionCuarentenaComponent;
  let fixture: ComponentFixture<GestionCuarentenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCuarentenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCuarentenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
