import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;
  // tslint:disable-next-line:no-input-rename
  @Input ('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { 

  }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
}
