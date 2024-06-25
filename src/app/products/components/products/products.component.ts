import { Component, OnInit } from '@angular/core';
import { ProductsService} from "../../services/products-api/products.service";
import { Product } from '../../model/product.entity';
import { FavoritesApiService } from "../../../dashboard-and-analytics/services/favorites-api/favorites-api.service";
import {NgForm} from "@angular/forms";
import {Order} from "../../../orders/model/order.entity";
import {OrdersService} from "../../../orders/services/orders.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  orders: Order[] = [];
  order: Order = new Order();
  lastOrder=0;
  constructor(private productsService: ProductsService, private favoritesApiService: FavoritesApiService, private orderApiService: OrdersService) {}

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
