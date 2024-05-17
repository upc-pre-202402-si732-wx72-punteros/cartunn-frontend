import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
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
