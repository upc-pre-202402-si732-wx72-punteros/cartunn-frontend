import { Component } from '@angular/core';
import { ProductRefund } from '../../model/product-refund.entity';
import { ProductRefundsApiService } from '../../services/product-refunds-api.service';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-product-refunds',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  product_refunds: ProductRefund[] = [];

  constructor(
    private productRefundsApiService: ProductRefundsApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productRefundsApiService.getRefunds().subscribe((data: any) => {
      this.product_refunds = data;
      console.log(this.product_refunds);
    });
  }

  getColor(status: string): string {
    switch (status) {
      case 'Processed':
        return '#4CAF50';
      case 'Rejected':
        return '#F44336';
      case 'Processing':
        return '#FFC107';
      default:
        return '#FFC107';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent);
  }
}
