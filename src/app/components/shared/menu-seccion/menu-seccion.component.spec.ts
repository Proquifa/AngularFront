import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSeccionComponent } from './menu-seccion.component';

describe('MenuSeccionComponent', () => {
  let component: MenuSeccionComponent;
  let fixture: ComponentFixture<MenuSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
