import { Injectable, computed, signal } from '@angular/core';
import { IProduct } from '../../../shared/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<IProduct[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0)
  })

  constructor() { }

  addToCart(product: IProduct){
    this.cart.update(state => [...state, product]);
  }
}