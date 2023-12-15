import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDashListingsAddComponent } from './pharmacy-dash-listings-add.component';

describe('PharmacyDashListingsAddComponent', () => {
  let component: PharmacyDashListingsAddComponent;
  let fixture: ComponentFixture<PharmacyDashListingsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyDashListingsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDashListingsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
