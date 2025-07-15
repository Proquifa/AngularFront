import { TestBed, inject } from '@angular/core/testing';

import { ConsolaStockService } from './consola-stock.service';

describe('ConsolaStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsolaStockService]
    });
  });

  it('should be created', inject([ConsolaStockService], (service: ConsolaStockService) => {
    expect(service).toBeTruthy();
  }));
});
