import { TestBed, inject } from '@angular/core/testing';

import { GestionarCuarentenaService } from './gestionar-cuarentena.service';

describe('GestionarCuarentenaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionarCuarentenaService]
    });
  });

  it('should be created', inject([GestionarCuarentenaService], (service: GestionarCuarentenaService) => {
    expect(service).toBeTruthy();
  }));
});
