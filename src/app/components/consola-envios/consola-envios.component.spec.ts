import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaEnviosComponent } from './consola-envios.component';

describe('ConsolaEnviosComponent', () => {
  let component: ConsolaEnviosComponent;
  let fixture: ComponentFixture<ConsolaEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaEnviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
