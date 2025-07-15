import { TestBed, inject } from '@angular/core/testing';

import { AsuntosRegulatoriosService } from './asuntos-regulatorios.service';

describe('AsuntosRegulatoriosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsuntosRegulatoriosService]
    });
  });

  it('should be created', inject([AsuntosRegulatoriosService], (service: AsuntosRegulatoriosService) => {
    expect(service).toBeTruthy();
  }));
});
