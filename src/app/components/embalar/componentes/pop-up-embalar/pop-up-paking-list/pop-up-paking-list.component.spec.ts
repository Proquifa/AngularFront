import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPakingListComponent } from './pop-up-paking-list.component';

describe('PopUpPakingListComponent', () => {
  let component: PopUpPakingListComponent;
  let fixture: ComponentFixture<PopUpPakingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPakingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPakingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
