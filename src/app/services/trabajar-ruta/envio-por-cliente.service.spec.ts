import { TestBed, inject } from '@angular/core/testing';

import { EnvioPorClienteService } from './envio-por-cliente.service';

describe('EnvioPorClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvioPorClienteService]
    });
  });

  it('should be created', inject([EnvioPorClienteService], (service: EnvioPorClienteService) => {
    expect(service).toBeTruthy();
  }));
});
