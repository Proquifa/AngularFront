import { TestBed, inject } from '@angular/core/testing';

import { MaterialReceptorService } from './material-receptor.service';

describe('MaterialReceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialReceptorService]
    });
  });

  it('should be created', inject([MaterialReceptorService], (service: MaterialReceptorService) => {
    expect(service).toBeTruthy();
  }));
});
