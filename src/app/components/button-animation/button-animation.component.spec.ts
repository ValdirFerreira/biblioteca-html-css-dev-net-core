import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnimationComponent } from './button-animation.component';

describe('ButtonAnimationComponent', () => {
  let component: ButtonAnimationComponent;
  let fixture: ComponentFixture<ButtonAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAnimationComponent]
    });
    fixture = TestBed.createComponent(ButtonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
