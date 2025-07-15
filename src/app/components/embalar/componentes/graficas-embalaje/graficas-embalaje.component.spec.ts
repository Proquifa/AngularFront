import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasEmbalajeComponent } from './graficas-embalaje.component';

describe('GraficasEmbalajeComponent', () => {
  let component: GraficasEmbalajeComponent;
  let fixture: ComponentFixture<GraficasEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
