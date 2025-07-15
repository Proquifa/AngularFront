import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboSinBorderComponent } from './combo-sin-border.component';

describe('ComboSinBorderComponent', () => {
  let component: ComboSinBorderComponent;
  let fixture: ComponentFixture<ComboSinBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboSinBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboSinBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
