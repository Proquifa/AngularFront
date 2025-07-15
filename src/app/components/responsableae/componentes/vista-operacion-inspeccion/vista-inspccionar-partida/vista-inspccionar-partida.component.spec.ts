import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaInspccionarPartidaComponent } from './vista-inspccionar-partida.component';

describe('VistaInspccionarPartidaComponent', () => {
  let component: VistaInspccionarPartidaComponent;
  let fixture: ComponentFixture<VistaInspccionarPartidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaInspccionarPartidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaInspccionarPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
