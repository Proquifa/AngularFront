import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core'
import { FlipDirective } from '../../../directives/flip.directive'
@Component({
  selector: 'two-face-card',
  templateUrl: './two-face-card.component.html',
  styleUrls: ['./two-face-card.component.scss']
})
export class TwoFaceCardComponente implements OnInit {

  @Input() flipOnEvent: boolean = false;
  @ContentChild(FlipDirective)
  toggle: FlipDirective;

  constructor(){}

  ngOnInit(){

  }

  @HostBinding("class.flip") flip() {
    console.log(this.toggle)
  }

  flipCard(){
    this.flipOnEvent = !this.flipOnEvent
  }
}
