import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropListSearchComponent } from './drop-list-search.component';

describe('DropListSearchComponent', () => {
  let component: DropListSearchComponent;
  let fixture: ComponentFixture<DropListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
