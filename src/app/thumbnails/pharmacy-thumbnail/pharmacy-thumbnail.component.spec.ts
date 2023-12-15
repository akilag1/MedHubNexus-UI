import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyThumbnailComponent } from './pharmacy-thumbnail.component';

describe('PharmacyThumbnailComponent', () => {
  let component: PharmacyThumbnailComponent;
  let fixture: ComponentFixture<PharmacyThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
