import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() product: any;
  @Output() productRemove: any = new EventEmitter();
  constructor() {}

  calcTotalItems() {
    return this.product.reduce((acc, prod) => (acc += prod.quantity), 0);
  }
  ngOnInit(): void {}

  dec() {
    this.updateQuantity(Number(this.product.quantity - 1));
  }
  inc() {
    this.updateQuantity(Number(this.product.quantity + 1));
  }

  updateQuantity(delta: number) {
    if (delta < 1) this.productRemove.emit(this.product);
    this.product.quantity = delta;
  }
}
