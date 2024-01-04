import { Component, inject } from '@angular/core';
import { CartService } from '../../../cart/services/cart/cart.service';
import { RouterLinkWithHref } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule} from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RippleModule, StyleClassModule, InputTextModule, DividerModule, ButtonModule, InputGroupModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart  ;
  total = this.cartService.total;
}
