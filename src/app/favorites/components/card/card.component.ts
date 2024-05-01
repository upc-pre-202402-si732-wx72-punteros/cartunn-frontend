import { Component } from '@angular/core';
import { FavoritesApiService } from "../../services/favorites-api.service";
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
      .subscribe((favorites: Product[]) => {
        this.favorites = favorites;
      });
  }
}
