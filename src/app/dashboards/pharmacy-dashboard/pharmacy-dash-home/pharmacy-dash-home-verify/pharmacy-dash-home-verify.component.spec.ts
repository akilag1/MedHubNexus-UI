import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDashHomeVerifyComponent } from './pharmacy-dash-home-verify.component';

describe('PharmacyDashHomeVerifyComponent', () => {
  let component: PharmacyDashHomeVerifyComponent;
  let fixture: ComponentFixture<PharmacyDashHomeVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyDashHomeVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDashHomeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
