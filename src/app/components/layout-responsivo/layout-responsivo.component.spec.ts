import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutResponsivoComponent } from './layout-responsivo.component';

describe('LayoutResponsivoComponent', () => {
  let component: LayoutResponsivoComponent;
  let fixture: ComponentFixture<LayoutResponsivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutResponsivoComponent]
    });
    fixture = TestBed.createComponent(LayoutResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
