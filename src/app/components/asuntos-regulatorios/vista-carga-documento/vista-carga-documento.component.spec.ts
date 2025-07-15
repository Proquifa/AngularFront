import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCargaDocumentoComponent } from './vista-carga-documento.component';

describe('VistaCargaDocumentoComponent', () => {
  let component: VistaCargaDocumentoComponent;
  let fixture: ComponentFixture<VistaCargaDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCargaDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCargaDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
