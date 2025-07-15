import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqFooterComponent } from './pq-footer.component';

describe('PqFooterComponent', () => {
  let component: PqFooterComponent;
  let fixture: ComponentFixture<PqFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
