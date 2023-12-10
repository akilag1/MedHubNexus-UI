import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashRequestsComponent } from './admin-dash-requests.component';

describe('AdminDashRequestsComponent', () => {
  let component: AdminDashRequestsComponent;
  let fixture: ComponentFixture<AdminDashRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
