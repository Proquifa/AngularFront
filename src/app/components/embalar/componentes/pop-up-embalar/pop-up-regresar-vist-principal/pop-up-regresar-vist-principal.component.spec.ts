import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRegresarVistPrincipalComponent } from './pop-up-regresar-vist-principal.component';

describe('PopUpRegresarVistPrincipalComponent', () => {
  let component: PopUpRegresarVistPrincipalComponent;
  let fixture: ComponentFixture<PopUpRegresarVistPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpRegresarVistPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpRegresarVistPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
