import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaMenuComponent } from './tarjeta-menu.component';

describe('TarjetaMenuComponent', () => {
  let component: TarjetaMenuComponent;
  let fixture: ComponentFixture<TarjetaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
