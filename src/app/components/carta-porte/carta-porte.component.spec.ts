import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPorteComponent } from './carta-porte.component';

describe('CartaPorteComponent', () => {
  let component: CartaPorteComponent;
  let fixture: ComponentFixture<CartaPorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaPorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaPorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
