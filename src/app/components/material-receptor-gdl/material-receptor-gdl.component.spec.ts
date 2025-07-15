import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialReceptorGdlComponent } from './material-receptor-gdl.component';

describe('MaterialReceptorGdlComponent', () => {
  let component: MaterialReceptorGdlComponent;
  let fixture: ComponentFixture<MaterialReceptorGdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialReceptorGdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialReceptorGdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
