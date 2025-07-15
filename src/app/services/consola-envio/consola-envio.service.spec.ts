import { TestBed, inject } from '@angular/core/testing';

import { ConsolaEnvioService } from './consola-envio.service';

describe('ConsolaEnvioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolaEnvioService]
    });
  });

  it('should be created', inject([ConsolaEnvioService], (service: ConsolaEnvioService) => {
    expect(service).toBeTruthy();
  }));
});
