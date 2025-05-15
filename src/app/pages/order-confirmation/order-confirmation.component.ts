import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../cart.model';

@Component({
  selector: 'app-order-confirmation',
  standalone: false,
  templateUrl: './order-confirmation.component.html'
})
export class OrderConfirmationComponent implements OnInit {
  orderSuccessMessage: string = "Thank you for your order! Your order has been successfully placed.";

  orderItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { items: CartItem[], total: number };

    if (state) {
      this.orderItems = state.items;
      this.totalPrice = state.total;
    }
  }
  
  ngOnInit(): void {
    // Here, you could also display actual order details
  }
}
