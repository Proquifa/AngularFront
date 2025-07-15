import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCorreoComponent } from './pop-up-correo.component';

describe('PopUpCorreoComponent', () => {
  let component: PopUpCorreoComponent;
  let fixture: ComponentFixture<PopUpCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
