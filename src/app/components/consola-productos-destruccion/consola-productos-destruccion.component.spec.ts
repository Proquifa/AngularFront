import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaProductosDestruccionComponent } from './consola-productos-destruccion.component';

describe('ConsolaProductosDestruccionComponent', () => {
  let component: ConsolaProductosDestruccionComponent;
  let fixture: ComponentFixture<ConsolaProductosDestruccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaProductosDestruccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaProductosDestruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
