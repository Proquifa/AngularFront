import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboFlechaRellenaComponent } from './combo-flecha-rellena.component';

describe('ComboFlechaRellenaComponent', () => {
  let component: ComboFlechaRellenaComponent;
  let fixture: ComponentFixture<ComboFlechaRellenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboFlechaRellenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboFlechaRellenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
