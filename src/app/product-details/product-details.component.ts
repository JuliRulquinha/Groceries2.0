import { Component, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'groceries-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

    @Input() product!: IProduct;
    //@Output() buy = new EventEmitter();
  
    getImageUrl(product: IProduct){
      debugger;
      if(!product) return '';
      return product.imageName; 
    }

}
