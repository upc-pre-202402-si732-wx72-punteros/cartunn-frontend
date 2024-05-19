import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
export interface DialogData {
  observation: string;
}
@Component({
  selector: 'app-orders-observation',
  templateUrl: './orders-observation.component.html',
  styleUrl: './orders-observation.component.css',

})
export class OrdersObservationComponent {
  constructor(public dialogRef: MatDialogRef<OrdersObservationComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
