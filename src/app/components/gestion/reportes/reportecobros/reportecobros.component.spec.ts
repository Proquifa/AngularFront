import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportecobrosComponent } from './reportecobros.component';

describe('ReportecobrosComponent', () => {
  let component: ReportecobrosComponent;
  let fixture: ComponentFixture<ReportecobrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportecobrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportecobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
