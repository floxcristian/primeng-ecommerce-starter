import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartService } from '../../../cart/services/cart/cart.service';
import { IProduct } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export default class ProductListComponent {

  private cartService = inject(CartService);
  _product= {
    name: '',
    price: 0
  }

  addToCart(product: IProduct): void{
    this.cartService.addToCart(product);
  }
}
