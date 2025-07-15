import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopInformativoComponent } from './pop-informativo.component';

describe('PopInformativoComponent', () => {
  let component: PopInformativoComponent;
  let fixture: ComponentFixture<PopInformativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInformativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
