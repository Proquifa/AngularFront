import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditarLoteComponent } from './pop-up-editar-lote.component';

describe('PopUpEditarLoteComponent', () => {
  let component: PopUpEditarLoteComponent;
  let fixture: ComponentFixture<PopUpEditarLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEditarLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditarLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
