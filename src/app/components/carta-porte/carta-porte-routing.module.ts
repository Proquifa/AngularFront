import {NgModule} from "@angular/core";
import {Router, RouterModule} from "@angular/router";
import {CartaPorteComponent} from "./carta-porte.component";

@NgModule({
  imports:[RouterModule.forChild([
    {
      path:'',
      component:CartaPorteComponent}
  ])],
  exports:[RouterModule]
})
export class CartaPorteRoutingModule {

}
