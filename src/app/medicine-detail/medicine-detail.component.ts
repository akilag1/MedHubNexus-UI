import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      comment: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.myForm.value);
    }
  }

}
