import { Directive, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[flip-card]'
})
export class FlipDirective {
  @Input() value;
  flip = false
  constructor(){}

  @HostListener('click') onClick(){
    console.log('click on Directive :O')
    console.log(this.flip)
    console.log(this.value)
    this.flip = this.value
  }
}
