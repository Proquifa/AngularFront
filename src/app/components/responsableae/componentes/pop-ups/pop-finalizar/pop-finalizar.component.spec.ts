import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopFinalizarComponent } from './pop-finalizar.component';

describe('PopFinalizarComponent', () => {
  let component: PopFinalizarComponent;
  let fixture: ComponentFixture<PopFinalizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopFinalizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
