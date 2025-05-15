import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-orders',
  standalone: false,
  templateUrl: './your-orders.component.html',
  styleUrl: './your-orders.component.css'
})
export class YourOrdersComponent implements OnInit {
  orders: any[] = [];

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    const stored = localStorage.getItem('orders');
    this.orders = stored ? JSON.parse(stored) : [];
  }

  deleteOrder(orderId: number): void {
    this.orders = this.orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }
}
