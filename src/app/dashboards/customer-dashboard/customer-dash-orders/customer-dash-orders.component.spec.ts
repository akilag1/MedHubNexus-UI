import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashOrdersComponent } from './customer-dash-orders.component';

describe('CustomerDashOrdersComponent', () => {
  let component: CustomerDashOrdersComponent;
  let fixture: ComponentFixture<CustomerDashOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDashOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDashOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
