import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpInformativoComponent } from './pop-up-informativo.component';

describe('PopUpInformativoComponent', () => {
  let component: PopUpInformativoComponent;
  let fixture: ComponentFixture<PopUpInformativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpInformativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
