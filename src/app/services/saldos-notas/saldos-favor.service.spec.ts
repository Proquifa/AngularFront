import { TestBed, inject } from '@angular/core/testing';

import { SaldosFavorService } from './saldos-favor.service';

describe('SaldosFavorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaldosFavorService]
    });
  });

  it('should be created', inject([SaldosFavorService], (service: SaldosFavorService) => {
    expect(service).toBeTruthy();
  }));
});
