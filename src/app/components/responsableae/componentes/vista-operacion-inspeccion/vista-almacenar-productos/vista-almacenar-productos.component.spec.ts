import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAlmacenarProductosComponent } from './vista-almacenar-productos.component';

describe('VistaAlmacenarProductosComponent', () => {
  let component: VistaAlmacenarProductosComponent;
  let fixture: ComponentFixture<VistaAlmacenarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAlmacenarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAlmacenarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
