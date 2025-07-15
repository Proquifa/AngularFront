import { TestBed, inject } from '@angular/core/testing';

import { VisitaClienteService } from './visita-cliente.service';

describe('VisitaClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitaClienteService]
    });
  });

  it('should be created', inject([VisitaClienteService], (service: VisitaClienteService) => {
    expect(service).toBeTruthy();
  }));
});
