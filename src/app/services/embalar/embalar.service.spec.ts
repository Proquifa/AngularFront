import { TestBed, inject } from '@angular/core/testing';

import { EmbalarService } from './embalar.service';

describe('EmbalarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmbalarService]
    });
  });

  it('should be created', inject([EmbalarService], (service: EmbalarService) => {
    expect(service).toBeTruthy();
  }));
});
