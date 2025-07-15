import { TestBed, inject } from '@angular/core/testing';

import { ReportecobrosService } from './reportecobros.service';

describe('ReportecobrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportecobrosService]
    });
  });

  it('should be created', inject([ReportecobrosService], (service: ReportecobrosService) => {
    expect(service).toBeTruthy();
  }));
});
