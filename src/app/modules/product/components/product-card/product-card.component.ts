import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: IProduct;
  @Output() _addToCart = new EventEmitter();

  addToCart(){
    this._addToCart.emit('');
  }
}
