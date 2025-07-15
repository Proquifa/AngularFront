import { TestBed, inject } from '@angular/core/testing';

import { DocumentosRecibidosService } from './documentos-recibidos.service';

describe('DocumentosEnviadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentosRecibidosService]
    });
  });

  it('should be created', inject([DocumentosRecibidosService], (service: DocumentosRecibidosService) => {
    expect(service).toBeTruthy();
  }));
});
