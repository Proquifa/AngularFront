import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableaeComponent } from './responsableae.component';

describe('ResponsableaeComponent', () => {
  let component: ResponsableaeComponent;
  let fixture: ComponentFixture<ResponsableaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
