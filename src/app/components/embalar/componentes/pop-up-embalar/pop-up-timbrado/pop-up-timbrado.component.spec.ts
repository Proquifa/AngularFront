import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTimbradoComponent } from './pop-up-timbrado.component';

describe('PopUpTimbradoComponent', () => {
  let component: PopUpTimbradoComponent;
  let fixture: ComponentFixture<PopUpTimbradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpTimbradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTimbradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
