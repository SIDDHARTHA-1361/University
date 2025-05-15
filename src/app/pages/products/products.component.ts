import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { PRODUCTS } from '../../products-data';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  products: Product[] = PRODUCTS;

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product.id, product.title, product.price);
  }
}
