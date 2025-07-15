import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpGrabacionVideoComponent } from './pop-up-grabacion-video.component';

describe('PopUpGrabacionVideoComponent', () => {
  let component: PopUpGrabacionVideoComponent;
  let fixture: ComponentFixture<PopUpGrabacionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpGrabacionVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpGrabacionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
