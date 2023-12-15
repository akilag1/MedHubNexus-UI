import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDashHomeComponent } from './pharmacy-dash-home.component';

describe('PharmacyDashHomeComponent', () => {
  let component: PharmacyDashHomeComponent;
  let fixture: ComponentFixture<PharmacyDashHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyDashHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDashHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
