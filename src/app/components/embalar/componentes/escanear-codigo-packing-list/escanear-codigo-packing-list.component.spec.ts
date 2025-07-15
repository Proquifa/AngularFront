import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscanearCodigoPackingListComponent } from './escanear-codigo-packing-list.component';

describe('EscanearCodigoPackingListComponent', () => {
  let component: EscanearCodigoPackingListComponent;
  let fixture: ComponentFixture<EscanearCodigoPackingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscanearCodigoPackingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscanearCodigoPackingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
