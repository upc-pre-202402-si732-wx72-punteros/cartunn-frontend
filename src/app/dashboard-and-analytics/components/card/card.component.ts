import { Component } from '@angular/core';
import { FavoritesApiService } from "../../services/favorites-api/favorites-api.service";
import { Product } from "../../../products/model/product.entity";

@Component({
  selector: 'app-card-favorites',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class FavoritesCardComponent {
  favorites: Product[] = [];

  constructor(private favoritesApiService: FavoritesApiService) {}


  ngOnInit(): void {
    this.favoritesApiService.getFavoritesList()
      .subscribe((favorites: { favoriteId: number, productId: number }[]) => {
        favorites.forEach(favorite => {
          this.favoritesApiService.getProductById(favorite.productId)
            .subscribe((product: Product) => {
              this.favorites.push(product);
            });
        });
      });
  }
  removeFromFavorites(productId: number): void {
    console.log(productId);
    this.favoritesApiService.removeFavorite(productId).subscribe(() => {
      console.log(this.favorites);
      this.favorites = this.favorites.filter(product => product.id !== productId);
    });
  }
}
