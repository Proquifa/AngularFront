import { TestBed, inject } from '@angular/core/testing';

import { DocumentosEnviadosService } from './documentos-enviados.service';

describe('DocumentosEnviadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentosEnviadosService]
    });
  });

  it('should be created', inject([DocumentosEnviadosService], (service: DocumentosEnviadosService) => {
    expect(service).toBeTruthy();
  }));
});
