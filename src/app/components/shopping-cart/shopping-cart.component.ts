import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();

  calcTotalItems() {
    return Number(this.products.reduce((acc, prod) => acc += prod.quantity, 0));
  }

  calcTotalPrice() {
    const total = this.products.reduce((acc, prod) => acc += (prod.price * prod.quantity), 0);
    return new Intl.NumberFormat('en-US').format(total);
  }

  ngOnInit(): void {
  }

}
