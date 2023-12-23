import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDashDetailsComponent } from './pharmacy-dash-details.component';

describe('PharmacyDashDetailsComponent', () => {
  let component: PharmacyDashDetailsComponent;
  let fixture: ComponentFixture<PharmacyDashDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyDashDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
