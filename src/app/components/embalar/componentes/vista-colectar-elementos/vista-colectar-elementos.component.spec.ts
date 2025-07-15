import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaColectarElementosComponent } from './vista-colectar-elementos.component';

describe('VistaColectarElementosComponent', () => {
  let component: VistaColectarElementosComponent;
  let fixture: ComponentFixture<VistaColectarElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaColectarElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaColectarElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
