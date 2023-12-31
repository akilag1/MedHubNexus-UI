import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pharmacy-dash-listings-add',
  templateUrl: './pharmacy-dash-listings-add.component.html',
  styleUrls: ['./pharmacy-dash-listings-add.component.css']
})
export class PharmacyDashListingsAddComponent implements OnInit {

  public createListingGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.createListingGroup = this._formBuilder.group({
      'drugName': '',
      'manuName': '',
      'manuDate': '',
      'expDate': '',
      'quantity': '',
      'price': '',
      thumbnails: this._formBuilder.array([])
    })

   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log(this.createListingGroup.value);
  }

  get thumbnails() {
    return this.createListingGroup.get('thumbnails') as FormArray;
  }

  onFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.thumbnails.push(this._formBuilder.control(e.target.result));
      };
      reader.readAsDataURL(files[i]);
    }
  }

  removeThumbnail(index: number) {
    this.thumbnails.removeAt(index);
  }

  getThumbnailUrl(dataUrl: string) {
    return dataUrl;
  }

}
