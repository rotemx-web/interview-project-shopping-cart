import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})

export class CartProductComponent implements OnInit {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  dec() { this.updateQuantity(Number(this.product.quantity) - 1); }
  inc() { this.updateQuantity(Number(this.product.quantity) + 1); }

  updateQuantity(delta: number) {
    if (delta < 1) this.removeProduct();
    this.product.quantity = delta;
  }

  removeProduct() {
    this.productRemoved.emit(this.product);
  }

}
