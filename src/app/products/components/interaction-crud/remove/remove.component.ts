import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService} from "../../../services/products-api/products.service";

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrl: './remove.component.css'
})
export class RemoveComponent {
  id: number = 0;
  constructor(private productsService: ProductsService) { }

  submitNotification(form: NgForm): void {
    if (form.valid) {
      this.productsService.deleteProduct(this.id).subscribe(() => {
        console.log('Product removed successfully');
        form.reset();
      });
    }
  }
}
