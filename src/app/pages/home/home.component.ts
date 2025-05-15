import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProducts = [
    {
      title: 'assets',
      price: 3499,
      image: '../../assets/hoodie.jpg'
    },
    {
      title: 'Street Performance Deck',
      price: 4499,
      image: 'https://images.unsplash.com/photo-1526178612010-7cc4ad6bcdb7'
    },
    {
      title: 'All-Terrain Longboard',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1597600151824-b3ecb9b1a7d3'
    }
  ];
}

