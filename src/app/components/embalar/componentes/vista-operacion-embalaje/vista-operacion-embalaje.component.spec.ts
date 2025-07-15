import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOperacionEmbalajeComponent } from './vista-operacion-embalaje.component';

describe('VistaOperacionEmbalajeComponent', () => {
  let component: VistaOperacionEmbalajeComponent;
  let fixture: ComponentFixture<VistaOperacionEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOperacionEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOperacionEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
