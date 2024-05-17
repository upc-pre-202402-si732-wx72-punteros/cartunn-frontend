import { Component } from '@angular/core';

@Component({
  selector: 'app-notify-suppliers',
  templateUrl: './notify-suppliers.component.html',
  styleUrl: './notify-suppliers.component.css'
})
export class NotifySuppliersComponent {
  constructor() { }

  submitNotification(): void {
    console.log('Form submitted successfully');
  }
}
