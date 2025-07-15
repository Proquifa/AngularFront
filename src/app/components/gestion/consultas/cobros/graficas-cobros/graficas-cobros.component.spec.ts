import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CobrosComponent } from "../cobros.component";
import { GraficasCobrosComponent } from './graficas-cobros.component';

describe('GraficasComponent', () => {
    let component: GraficasCobrosComponent;
    let fixture: ComponentFixture<GraficasCobrosComponent>;
           
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ GraficasCobrosComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(GraficasCobrosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });