import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesTabComponent } from './botones-tab.component';

describe('BotonesTabComponent', () => {
  let component: BotonesTabComponent;
  let fixture: ComponentFixture<BotonesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
