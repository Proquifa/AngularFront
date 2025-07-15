import { TestBed, inject } from '@angular/core/testing';

import { ProductoReclamoService } from './producto-reclamo.service';

describe('ProductoReclamoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoReclamoService]
    });
  });

  it('should be created', inject([ProductoReclamoService], (service: ProductoReclamoService) => {
    expect(service).toBeTruthy();
  }));
});
