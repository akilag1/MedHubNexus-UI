import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashHomeBoxComponent } from './dash-home-box.component';

describe('PharmacyDashHomeBoxComponent', () => {
  let component: DashHomeBoxComponent;
  let fixture: ComponentFixture<DashHomeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashHomeBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashHomeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
