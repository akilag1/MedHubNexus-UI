import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashCustomersComponent } from './admin-dash-customers.component';

describe('AdminDashCustomersComponent', () => {
  let component: AdminDashCustomersComponent;
  let fixture: ComponentFixture<AdminDashCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
