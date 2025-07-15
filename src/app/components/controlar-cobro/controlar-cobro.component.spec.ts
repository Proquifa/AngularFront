import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarCobroComponent } from './controlar-cobro.component';

describe('ControlarCobroComponent', () => {
  let component: ControlarCobroComponent;
  let fixture: ComponentFixture<ControlarCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
