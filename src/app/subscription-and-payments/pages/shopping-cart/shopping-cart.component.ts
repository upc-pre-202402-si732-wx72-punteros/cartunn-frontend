import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  title:string = 'List Items';
  divdatasafe:boolean=false;
  constructor() {
  }
  showDataSafe(){
    this.divdatasafe=!this.divdatasafe;
  }
}
