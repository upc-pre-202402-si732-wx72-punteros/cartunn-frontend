import { Component } from '@angular/core';
import { FavoritesApiService } from "../../services/favorites-api/favorites-api.service";
import { Product } from "../../../products/model/product.entity";
import {OrdersService} from "../../../orders/services/orders.service";
import {Order} from "../../../orders/model/order.entity";

@Component({
  selector: 'app-card-favorites',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class FavoritesCardComponent {
  favorites: Product[] = [];
  orders: Order[] = [];
  order: Order = new Order();
  lastOrder=0;
  constructor(private favoritesApiService: FavoritesApiService, private orderApiService: OrdersService) {}


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
  onOrderClick(product: Product): void {
    this.orderApiService.getOrders().subscribe((data: any) => {
      this.orders = data;
      if(this.orders.length>0) {
        this.lastOrder = this.orders[this.orders.length - 1].code;
      }
    });
    this.order=new Order();
    this.order.code=this.lastOrder+1;
    this.order.name=product.title;
    this.order.description=product.description;
    this.order.status="In process";
    var today = new Date();
    //split
    var dd = today.getDate();
    var dd2 = today.getDate()+2;
    var mm = today.getMonth() + 1; //because January is 0!
    var yyyy = today.getFullYear();
    this.order.entryDate=yyyy+'-'+(mm<10?'0'+mm:mm)+'-'+dd;
    this.order.exitDate=yyyy+'-'+(mm<10?'0'+mm:mm)+'-'+dd2;
    this.orderApiService.addOrder(this.order).subscribe();


  }
}
