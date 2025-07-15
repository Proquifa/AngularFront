import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorOvaladoComponent } from './buscador-ovalado.component';

describe('BuscadorOvaladoComponent', () => {
  let component: BuscadorOvaladoComponent;
  let fixture: ComponentFixture<BuscadorOvaladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorOvaladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorOvaladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
