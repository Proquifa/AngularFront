import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSeccionRolesComponent } from './menu-seccion-roles.component';

describe('MenuSeccionRolesComponent', () => {
  let component: MenuSeccionRolesComponent;
  let fixture: ComponentFixture<MenuSeccionRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSeccionRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSeccionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
