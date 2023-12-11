import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDashListingsComponent } from './pharmacy-dash-listings.component';

describe('PharmacyDashListingsComponent', () => {
  let component: PharmacyDashListingsComponent;
  let fixture: ComponentFixture<PharmacyDashListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyDashListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDashListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
