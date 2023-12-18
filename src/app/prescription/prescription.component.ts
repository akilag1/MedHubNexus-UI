import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  public prescriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prescriptionForm = this.fb.group({
      file: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      duration: [''],
      gender: ['', Validators.required],
      medicineAllergies: [''],
      allergiesDescription: [''],
      specialNotes: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.prescriptionForm.value);
  }

  onFileDrop(value:any){

  }

}
