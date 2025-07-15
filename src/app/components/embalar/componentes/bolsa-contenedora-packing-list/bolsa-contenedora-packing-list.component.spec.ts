import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaContenedoraPackingListComponent } from './bolsa-contenedora-packing-list.component';

describe('BolsaContenedoraPackingListComponent', () => {
  let component: BolsaContenedoraPackingListComponent;
  let fixture: ComponentFixture<BolsaContenedoraPackingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolsaContenedoraPackingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaContenedoraPackingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
