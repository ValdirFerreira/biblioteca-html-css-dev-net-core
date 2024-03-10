import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFotoComponent } from './menu-foto.component';

describe('MenuFotoComponent', () => {
  let component: MenuFotoComponent;
  let fixture: ComponentFixture<MenuFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuFotoComponent]
    });
    fixture = TestBed.createComponent(MenuFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
