import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpScanearComponent } from './pop-up-scanear.component';

describe('PopUpScanearComponent', () => {
  let component: PopUpScanearComponent;
  let fixture: ComponentFixture<PopUpScanearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpScanearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpScanearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
