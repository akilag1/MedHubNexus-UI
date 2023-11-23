import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineThumbnailComponent } from './medicine-thumbnail.component';

describe('MedicineThumbnailComponent', () => {
  let component: MedicineThumbnailComponent;
  let fixture: ComponentFixture<MedicineThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
