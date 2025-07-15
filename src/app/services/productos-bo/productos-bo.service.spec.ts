import { TestBed, inject } from '@angular/core/testing';

import { ProductosBoService } from './productos-bo.service';

describe('ProductosBoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductosBoService]
    });
  });

  it('should be created', inject([ProductosBoService], (service: ProductosBoService) => {
    expect(service).toBeTruthy();
  }));
});
