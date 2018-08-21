import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandHeadbarComponent } from './brand-headbar.component';

describe('BrandHeadbarComponent', () => {
  let component: BrandHeadbarComponent;
  let fixture: ComponentFixture<BrandHeadbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandHeadbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandHeadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
