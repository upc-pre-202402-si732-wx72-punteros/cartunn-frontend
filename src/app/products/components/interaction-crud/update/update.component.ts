import {Component, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Product} from "../../../model/product.entity";
import { ProductsService} from "../../../services/products-api/products.service";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  product: Product = new Product();
  constructor(private productService: ProductsService) { }

  onUploadClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.product.image = URL.createObjectURL(file);
    }
  }

  submitNotification(form: NgForm): void {
    if (form.valid) {
      this.productService.updateProduct(this.product).subscribe(() => {
        console.log('Product updated successfully');
        form.reset();
      });
    }
  }
}
