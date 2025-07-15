import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqBotoneraComponent } from './pq-botonera.component';

describe('PqBotoneraComponent', () => {
  let component: PqBotoneraComponent;
  let fixture: ComponentFixture<PqBotoneraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqBotoneraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqBotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
