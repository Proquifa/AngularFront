import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosRecibidosComponent } from './documentos-recibidos.component';

describe('DocumentosRecibidosComponent', () => {
  let component: DocumentosRecibidosComponent;
  let fixture: ComponentFixture<DocumentosRecibidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosRecibidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosRecibidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
