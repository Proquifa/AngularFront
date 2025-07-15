import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoUpEditarMontoComponent } from './po-up-editar-monto.component';

describe('PoUpEditarMontoComponent', () => {
  let component: PoUpEditarMontoComponent;
  let fixture: ComponentFixture<PoUpEditarMontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoUpEditarMontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoUpEditarMontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
