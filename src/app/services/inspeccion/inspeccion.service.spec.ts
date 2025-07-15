import { TestBed, inject } from '@angular/core/testing';

import { InspeccionService } from './inspeccion.service';

describe('InspeccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InspeccionService]
    });
  });

  it('should be created', inject([InspeccionService], (service: InspeccionService) => {
    expect(service).toBeTruthy();
  }));
});
