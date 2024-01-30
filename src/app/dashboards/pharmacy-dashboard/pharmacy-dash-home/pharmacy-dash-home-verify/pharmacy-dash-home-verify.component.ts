import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pharmacy-dash-home-verify',
  templateUrl: './pharmacy-dash-home-verify.component.html',
  styleUrls: ['./pharmacy-dash-home-verify.component.css']
})
export class PharmacyDashHomeVerifyComponent implements OnInit {

  public createListingGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    public dialogRefMain: MatDialogRef<PharmacyDashHomeVerifyComponent>) {

    this.createListingGroup = this._formBuilder.group({
      'name': '',
      'pharamacylicense': '',
      'location': '',
      'contactNo': '',
      'email': '',
      'pharamacistFName': '',
      'pharamacistLName': '',
      'nic': '',
      'pharmacistLicense': '',
      pharamacyLicenseProofs: this._formBuilder.array([]),
      pharamacistLicenseProofs: this._formBuilder.array([])
    })

   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.createListingGroup.value);
  }

  get pharamacyLicenseProofs() {
    return this.createListingGroup.get('pharamacyLicenseProofs') as FormArray;
  }

  get pharamacistLicenseProofs() {
    return this.createListingGroup.get('pharamacistLicenseProofs') as FormArray;
  }

  onPharamacyLicenseProofsFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pharamacyLicenseProofs.push(this._formBuilder.control(e.target.result));
      };
      reader.readAsDataURL(files[i]);
    }
  }

  onPharamacistLicenseProofsFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pharamacistLicenseProofs.push(this._formBuilder.control(e.target.result));
      };
      reader.readAsDataURL(files[i]);
    }
  }

  removePharamacyLicenseProofs(index: number) {
    this.pharamacyLicenseProofs.removeAt(index);
  }

  removePharamacistLicenseProofs(index: number) {
    this.pharamacistLicenseProofs.removeAt(index);
  }

  getPharamacyLicenseProofsUrl(dataUrl: string) {
    return dataUrl;
  }

  getPharamacistLicenseProofsUrl(dataUrl: string) {
    return dataUrl;
  }

  closeDialog(){
    this.dialogRefMain.close();
  }



}
