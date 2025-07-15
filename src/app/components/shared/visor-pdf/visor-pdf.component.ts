import { Component, OnInit, Input, Output, ViewChild ,EventEmitter, OnChanges, OnDestroy, SimpleChanges, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'pq-visor-pdf',
  templateUrl: './visor-pdf.component.html',
  styleUrls: ['./visor-pdf.component.scss']
})
export class VisorPdfComponent implements OnInit{
  sanitizer: any;
  // @Input() src: string;
  @Input() urlPdf: string = '';
  videoUrl: any;
  @ViewChild("visor") visor: ElementRef;

  constructor() {
}

  ngOnInit() {
    console.log(this.urlPdf);
    this.visor.nativeElement.src = this.urlPdf;
     // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlPdf);
  }


}
