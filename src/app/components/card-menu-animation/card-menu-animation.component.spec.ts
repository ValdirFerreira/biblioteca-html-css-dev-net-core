import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuAnimationComponent } from './card-menu-animation.component';

describe('CardMenuAnimationComponent', () => {
  let component: CardMenuAnimationComponent;
  let fixture: ComponentFixture<CardMenuAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMenuAnimationComponent]
    });
    fixture = TestBed.createComponent(CardMenuAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
