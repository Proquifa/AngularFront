import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemsCard } from '../../../class/ItemsCard.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pn-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit, OnChanges {

  @Input() inpLogo = './assets/Images/logo_hover_proquifa.svg';
  @Input() inpFrontValue = 'Valor de la tarjeta';
  @Input() inpBackTitle = 'Valor uno de la empresa';
  @Input() inpBackSubtitle = 'Valor dos de la empresa';
  @Input() inpLstItemsBackBody: ItemsCard[] = new Array();
  @Input() inpPath = '/protected/';
  @Input() id = 0;

  public classContainerFront = 'flipContainerFront isFront';
  public classContainerBack = 'flipContainerBack isBack';
  public classFlipContainer = 'flipContainer';

  constructor(
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inpLogo.currentValue === undefined && changes.inpLogo.currentValue === null && changes.inpLogo.currentValue === '') {
      this.inpLogo = './assets/Images/logo_hover_proquifa.svg';
    }
    if (changes.inpFrontValue.currentValue === undefined && changes.inpFrontValue.currentValue === null && changes.inpFrontValue.currentValue === '') {
      this.inpLogo = 'Valor de la tarjeta';
    }
  }

  ngOnInit() {
  }

  fnToggleCard(opc: number) {
    switch (opc) {
      case 0:
        this.classFlipContainer = 'flipContainer flipContainerBGW';
        this.classContainerBack = 'flipContainerBack isBack isFlippingFront';
        this.classContainerFront = 'flipContainerFront isFront isFlippingBack';
        setTimeout(() => {
          this.classContainerBack = 'flipContainerBack isFront';
          this.classContainerFront = 'flipContainerFront isBack';
        }, 500);
        break;
      case 1:
        this.classContainerFront = 'flipContainerFront isBack isFlippingFront';
        this.classContainerBack = 'flipContainerBack isFront isFlippingBack';
        setTimeout(() => {
          this.classContainerBack = 'flipContainerBack isBack';
          this.classContainerFront = 'flipContainerFront isFront';
          this.classFlipContainer = 'flipContainer';
        }, 500);
        break;
    }
  }
  fnGoTo() {
    this.router.navigate([this.inpPath, this.id]);
  }

}
