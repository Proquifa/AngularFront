import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadEnvioComponent } from './file-upload-envio.component';

describe('FileUploadEnvioComponent', () => {
  let component: FileUploadEnvioComponent;
  let fixture: ComponentFixture<FileUploadEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
