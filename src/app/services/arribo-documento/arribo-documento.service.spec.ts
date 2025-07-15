import { TestBed, inject } from '@angular/core/testing';

import { ArriboDocumentoService } from './arribo-documento.service';

describe('ArriboDocumentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArriboDocumentoService]
    });
  });

  it('should be created', inject([ArriboDocumentoService], (service: ArriboDocumentoService) => {
    expect(service).toBeTruthy();
  }));
});
