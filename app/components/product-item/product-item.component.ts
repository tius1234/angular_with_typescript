/**
 * Created by h2 on 2017. 7. 3..
 */

import { Component, Input } from '@angular/core';
import { Product } from 'app/services/product.service';

@Component({
    selector: 'auction-product-item',
    styleUrls: ['app/components/product-item/product-item.component.css'],
    templateUrl: 'app/components/product-item/product-item.component.html'
})
export default class ProductItemComponent {
    @Input() product: Product;
}