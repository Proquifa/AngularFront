import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPartidaComponent } from './informacion-partida.component';

describe('InformacionPartidaComponent', () => {
  let component: InformacionPartidaComponent;
  let fixture: ComponentFixture<InformacionPartidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionPartidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
