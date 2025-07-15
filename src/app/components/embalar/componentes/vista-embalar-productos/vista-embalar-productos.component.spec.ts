import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEmbalarProductosComponent } from './vista-embalar-productos.component';

describe('VistaEmbalarProductosComponent', () => {
  let component: VistaEmbalarProductosComponent;
  let fixture: ComponentFixture<VistaEmbalarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEmbalarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEmbalarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
