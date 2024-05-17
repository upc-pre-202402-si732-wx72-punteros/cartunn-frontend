import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor() { }

  onUploadClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('File selected:', file.name);
    }
  }

  submitNotification(): void {
    console.log('Form submitted successfully');
  }
}
