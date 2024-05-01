import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.entity";

@Component({
  selector: 'app-card-products',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class ProductsCardComponent {
  title:string = 'Products';
  products: Product[] = [];

  constructor(private productApiService: ProductsService) {
  }
  ngOnInit(): void{
    this.productApiService.getProducts()
      .subscribe((data: any) => {
      this.products = data;
    });
  }
}
