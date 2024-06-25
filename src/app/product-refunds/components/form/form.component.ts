import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductRefund } from '../../model/product-refund.entity';

@Component({
  selector: 'app-form-product-refunds',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  productRefund: ProductRefund;

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductRefund
  ) {
    this.productRefund = { ...data };
  }

  onSave(): void {
    this.dialogRef.close(this.productRefund);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
