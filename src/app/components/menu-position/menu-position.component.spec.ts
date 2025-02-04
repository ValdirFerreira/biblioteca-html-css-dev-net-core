import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPositionComponent } from './menu-position.component';

describe('MenuPositionComponent', () => {
  let component: MenuPositionComponent;
  let fixture: ComponentFixture<MenuPositionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPositionComponent]
    });
    fixture = TestBed.createComponent(MenuPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
