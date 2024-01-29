import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxResponsiveComponent } from './box-responsive.component';

describe('BoxResponsiveComponent', () => {
  let component: BoxResponsiveComponent;
  let fixture: ComponentFixture<BoxResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxResponsiveComponent]
    });
    fixture = TestBed.createComponent(BoxResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
