import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  @Input() products: any[];
  @Input() categoryProducts: any[];
  @Input() productsTitle: any[];
  @Output() productAdded = new EventEmitter();
  @Output() sortProductListByName: any = new EventEmitter();
  @Output() sortProductListByPrice: any = new EventEmitter();
  @Output() filterProductListByCategory: any = new EventEmitter();
  @Output() searchByTitle: any = new EventEmitter();

  ngOnInit(): void {
    this.categoryProducts = [
      ...new Set(this.products.map((product) => product.category)),
    ];
  }

  

  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
