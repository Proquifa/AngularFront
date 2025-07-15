import { TestBed, inject } from '@angular/core/testing';

import { ConsolaPrioridadesService } from './consola-prioridades.service';

describe('ConsolaPrioridadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolaPrioridadesService]
    });
  });

  it('should be created', inject([ConsolaPrioridadesService], (service: ConsolaPrioridadesService) => {
    expect(service).toBeTruthy();
  }));
});
