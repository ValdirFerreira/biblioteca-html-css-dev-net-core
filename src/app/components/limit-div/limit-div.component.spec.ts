import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitDivComponent } from './limit-div.component';

describe('LimitDivComponent', () => {
  let component: LimitDivComponent;
  let fixture: ComponentFixture<LimitDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitDivComponent]
    });
    fixture = TestBed.createComponent(LimitDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
