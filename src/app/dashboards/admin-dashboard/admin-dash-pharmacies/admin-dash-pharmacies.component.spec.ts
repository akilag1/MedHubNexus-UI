import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashPharmaciesComponent } from './admin-dash-pharmacies.component';

describe('AdminDashPharmaciesComponent', () => {
  let component: AdminDashPharmaciesComponent;
  let fixture: ComponentFixture<AdminDashPharmaciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashPharmaciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashPharmaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
