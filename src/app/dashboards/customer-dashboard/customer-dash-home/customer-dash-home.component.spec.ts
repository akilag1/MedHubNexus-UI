import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashHomeComponent } from './customer-dash-home.component';

describe('CustomerDashHomeComponent', () => {
  let component: CustomerDashHomeComponent;
  let fixture: ComponentFixture<CustomerDashHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDashHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDashHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
