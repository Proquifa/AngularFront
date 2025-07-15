import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbalarComponent } from './embalar.component';

describe('EmbalarComponent', () => {
  let component: EmbalarComponent;
  let fixture: ComponentFixture<EmbalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
