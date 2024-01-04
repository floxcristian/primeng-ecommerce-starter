import { Component, Input, inject, signal } from '@angular/core';
import { AuthService } from '@auth/services/auth/auth.service';
import { CartService } from '../../../cart/services/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export default class ProductDetailComponent {
  @Input() id?: string;
  cover = signal('');
  private productService = inject(AuthService);
  private cartService = inject(CartService);

}
