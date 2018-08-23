import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryItemComponent } from './add-gallery-item.component';

describe('AddGalleryItemComponent', () => {
  let component: AddGalleryItemComponent;
  let fixture: ComponentFixture<AddGalleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGalleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
