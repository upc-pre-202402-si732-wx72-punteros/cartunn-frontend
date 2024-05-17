import { Component } from '@angular/core';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrl: './remove.component.css'
})
export class RemoveComponent {
  constructor() { }

  submitNotification(): void {
    console.log('Form submitted successfully');
  }
}
