import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFiltersComponent } from './img-filters.component';

describe('ImgFiltersComponent', () => {
  let component: ImgFiltersComponent;
  let fixture: ComponentFixture<ImgFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgFiltersComponent]
    });
    fixture = TestBed.createComponent(ImgFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
