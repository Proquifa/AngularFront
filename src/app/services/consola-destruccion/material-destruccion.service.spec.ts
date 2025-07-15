import { TestBed, inject } from '@angular/core/testing';

import { MaterialDestruccionService } from './material-destruccion.service';

describe('MaterialDestruccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialDestruccionService]
    });
  });

  it('should be created', inject([MaterialDestruccionService], (service: MaterialDestruccionService) => {
    expect(service).toBeTruthy();
  }));
});
