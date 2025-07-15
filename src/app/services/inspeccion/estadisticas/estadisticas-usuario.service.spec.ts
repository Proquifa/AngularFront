import { TestBed, inject } from '@angular/core/testing';

import { EstadisticasUsuarioService } from './estadisticas-usuario.service';

describe('EstadisticasUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadisticasUsuarioService]
    });
  });

  it('should be created', inject([EstadisticasUsuarioService], (service: EstadisticasUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
