import { Component, OnInit } from '@angular/core';
import { ProductsService} from "../../services/products-api/products.service";
import { Product } from '../../model/product.entity';
import { FavoritesApiService } from "../../../dashboard-and-analytics/services/favorites-api/favorites-api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService, private favoritesApiService: FavoritesApiService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  toggleFavorite(product: Product): void {
    product.isFavorite = !product.isFavorite;
    if (product.isFavorite) {
      this.favoritesApiService.addFavorite(product.id).subscribe();
    } else {
      this.favoritesApiService.removeFavorite(product.id).subscribe();
    }
  }
}
