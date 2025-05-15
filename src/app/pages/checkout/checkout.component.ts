import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';
import { CartItem } from '../../cart.model';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  checkout(): void {
    // Simulate placing an order and redirect to order confirmation
    console.log('Order placed:', this.cartItems);

    const orderData = {
      id: new Date().getTime(), // unique ID
      items: this.cartItems,
      total: this.totalPrice,
      placedAt: new Date().toLocaleString()
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Clear cart after placing order
    this.cartService.getCartItems().length = 0; // Clear cart items
    this.cartService.getTotalPrice = () => 0;   // Reset total price

    // Navigate to order confirmation page with order data
    this.router.navigate(['/order-confirmation'], { state: orderData });
  }
}
