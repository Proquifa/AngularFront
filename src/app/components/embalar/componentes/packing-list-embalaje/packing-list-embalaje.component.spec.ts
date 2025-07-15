import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingListEmbalajeComponent } from './packing-list-embalaje.component';

describe('PackingListEmbalajeComponent', () => {
  let component: PackingListEmbalajeComponent;
  let fixture: ComponentFixture<PackingListEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingListEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingListEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
