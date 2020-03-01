import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shopping-card-summary',
  templateUrl: './shopping-card-summary.component.html',
  styleUrls: ['./shopping-card-summary.component.css']
})
export class ShoppingCardSummaryComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('cart') cart: ShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
