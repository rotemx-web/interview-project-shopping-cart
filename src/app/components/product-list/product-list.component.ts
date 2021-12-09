import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  @Input() products: any[];
  @Input() isSearching: boolean;
  @Input() isSearchDone: boolean;
  @Input() searchTimer: any;
  @Input() searchQuery: string;
  @Output() productAdded: any = new EventEmitter();
  @Output() productsSortedAbc: any = new EventEmitter();
  @Output() productsSortedPrice: any = new EventEmitter();
  @Output() productsSearched: any = new EventEmitter();

  ngOnInit(): void {
  }

  clearSearch() {
    this.searchQuery = '';
    this.isSearchDone = false;
    this.productsSearched.emit('');
  }

  triggerSearch(query) {
    this.searchQuery = query.trim();
    if (!this.searchQuery.length) {
      this.productsSearched.emit('');
      this.isSearching = false;
      this.isSearchDone = false;
    } else {
      this.isSearching = true;
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        this.productsSearched.emit(query);
        this.isSearchDone = true;
        this.isSearching = false;
      }, 1000);
    }
  }

  addProductToCart(product) {
    this.productAdded.emit(product);
  }

}
