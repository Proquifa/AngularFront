import { TestBed, inject } from '@angular/core/testing';

import { CartaPorteService } from './carta-porte.service';

describe('CartaPorteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartaPorteService]
    });
  });

  it('should be created', inject([CartaPorteService], (service: CartaPorteService) => {
    expect(service).toBeTruthy();
  }));
});
