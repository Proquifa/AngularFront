import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraDiasEmbalajeComponent } from './botonera-dias-embalaje.component';

describe('BotoneraDiasEmbalajeComponent', () => {
  let component: BotoneraDiasEmbalajeComponent;
  let fixture: ComponentFixture<BotoneraDiasEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraDiasEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraDiasEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
