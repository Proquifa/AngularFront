import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscanearCodigoEmbalajeComponent } from './escanear-codigo-embalaje.component';

describe('EscanearCodigoEmbalajeComponent', () => {
  let component: EscanearCodigoEmbalajeComponent;
  let fixture: ComponentFixture<EscanearCodigoEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscanearCodigoEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanearCodigoEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
