import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDestruccioonComponent } from './pop-up-destruccioon.component';

describe('PopUpDestruccioonComponent', () => {
  let component: PopUpDestruccioonComponent;
  let fixture: ComponentFixture<PopUpDestruccioonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDestruccioonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDestruccioonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
