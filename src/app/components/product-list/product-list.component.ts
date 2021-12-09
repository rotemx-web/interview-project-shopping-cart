import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  @Output() sortProductListByName: any = new EventEmitter();

  ngOnInit(): void {}

  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
