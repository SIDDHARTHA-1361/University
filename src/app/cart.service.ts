import { Injectable } from '@angular/core';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  // Get all cart items
  getCartItems(): CartItem[] {
    return this.cart;
  }

  // Add item to the cart
  addToCart(productId: number, title: string, price: number): void {
    const existingItem = this.cart.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ productId, title, price, quantity: 1 });
    }
  }

  // Remove item from the cart
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.productId !== productId);
  }

  // Get the total price of all items in the cart
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
