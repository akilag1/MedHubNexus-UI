import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDashOrdersComponent } from './pharmacy-dash-orders.component';

describe('PharmacyDashOrdersComponent', () => {
  let component: PharmacyDashOrdersComponent;
  let fixture: ComponentFixture<PharmacyDashOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyDashOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyDashOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
