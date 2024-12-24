import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss']
})
export class AddStoreComponent {
  storeForm: FormGroup;

  commercialRegistrationFile: File | null = null;
  vatFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.storeForm = this.fb.group({
      storeName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      linkMap: [''],
      commercialRegistration: [''],
      vatNumber: ['']
    });
  }

  onFileSelect(event: Event, field: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (field === 'commercialRegistrationFile') {
        this.commercialRegistrationFile = input.files[0];
      } else if (field === 'vatFile') {
        this.vatFile = input.files[0];
      }
    }
  }

  onSubmit(): void {
    if (this.storeForm.valid) {
      const formData = new FormData();
      formData.append('storeName', this.storeForm.get('storeName')?.value);
      formData.append('email', this.storeForm.get('email')?.value);
      formData.append('phone', this.storeForm.get('phone')?.value);
      formData.append('address', this.storeForm.get('address')?.value);
      formData.append('city', this.storeForm.get('city')?.value);
      formData.append('linkMap', this.storeForm.get('linkMap')?.value);
      formData.append('commercialRegistration', this.storeForm.get('commercialRegistration')?.value);
      formData.append('vatNumber', this.storeForm.get('vatNumber')?.value);

      if (this.commercialRegistrationFile) {
        formData.append('commercialRegistrationFile', this.commercialRegistrationFile);
      }
      if (this.vatFile) {
        formData.append('vatFile', this.vatFile);
      }

      // Perform the API request with formData
      console.log('Form submitted:', formData);
    }
  }
}
