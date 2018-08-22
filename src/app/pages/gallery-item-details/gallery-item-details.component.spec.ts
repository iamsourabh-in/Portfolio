import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemDetailsComponent } from './gallery-item-details.component';

describe('GalleryItemDetailsComponent', () => {
  let component: GalleryItemDetailsComponent;
  let fixture: ComponentFixture<GalleryItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
