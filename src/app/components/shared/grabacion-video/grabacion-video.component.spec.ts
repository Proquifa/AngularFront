import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabacionVideoComponent } from './grabacion-video.component';

describe('GrabacionVideoComponent', () => {
  let component: GrabacionVideoComponent;
  let fixture: ComponentFixture<GrabacionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabacionVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabacionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
