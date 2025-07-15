import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionExitosaComponent } from './operacion-exitosa.component';

describe('OperacionExitosaComponent', () => {
  let component: OperacionExitosaComponent;
  let fixture: ComponentFixture<OperacionExitosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacionExitosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionExitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
