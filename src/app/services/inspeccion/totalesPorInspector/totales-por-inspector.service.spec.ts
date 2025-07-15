import { TestBed, inject } from '@angular/core/testing';

import { TotalesPorInspectorService } from './totales-por-inspector.service';

describe('TotalesPorInspectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalesPorInspectorService]
    });
  });

  it('should be created', inject([TotalesPorInspectorService], (service: TotalesPorInspectorService) => {
    expect(service).toBeTruthy();
  }));
});
