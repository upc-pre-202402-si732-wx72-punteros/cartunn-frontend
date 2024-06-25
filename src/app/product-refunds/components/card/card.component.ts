import { Component } from '@angular/core';
import { ProductRefund } from '../../model/product-refund.entity';
import { ProductRefundsApiService } from '../../services/product-refunds-api.service';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-product-refunds',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  product_refunds: ProductRefund[] = [];

  constructor(
    private productRefundsApiService: ProductRefundsApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadRefunds();
  }

  loadRefunds(): void {
    this.productRefundsApiService.getRefunds().subscribe((data: ProductRefund[]) => {
      this.product_refunds = data;
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

  openDialog(productRefund: ProductRefund): void {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...productRefund },
    });

    dialogRef.afterClosed().subscribe((result: ProductRefund) => {
      if (result) {
        this.productRefundsApiService
          .updateProductRefund(result)
          .subscribe((updatedRefund: ProductRefund) => {
            // Actualizar el refund en la lista local
            const index = this.product_refunds.findIndex(
              (r) => r.id === updatedRefund.id
            );
            if (index !== -1) {
              this.product_refunds[index] = updatedRefund;
            }
          });
      }
    });
  }
}
