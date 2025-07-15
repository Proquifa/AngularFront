import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqHeaderComponent } from './pq-header.component';

describe('PqHeaderComponent', () => {
  let component: PqHeaderComponent;
  let fixture: ComponentFixture<PqHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
