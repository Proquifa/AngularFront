import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdEmbalajeComponent } from './fd-embalaje.component';

describe('FdEmbalajeComponent', () => {
  let component: FdEmbalajeComponent;
  let fixture: ComponentFixture<FdEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
