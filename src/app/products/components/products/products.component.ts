import { Component, OnInit } from '@angular/core';
import { ProductsService} from "../../services/products-api/products.service";
import { Product } from '../../model/product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  toggleFavorite(product: Product): void {
    product.isFavorite = !product.isFavorite;
  }
}
