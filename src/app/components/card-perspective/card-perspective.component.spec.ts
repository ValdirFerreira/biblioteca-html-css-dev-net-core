import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerspectiveComponent } from './card-perspective.component';

describe('CardPerspectiveComponent', () => {
  let component: CardPerspectiveComponent;
  let fixture: ComponentFixture<CardPerspectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPerspectiveComponent]
    });
    fixture = TestBed.createComponent(CardPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
