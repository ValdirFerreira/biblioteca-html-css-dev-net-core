import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBtnComponent } from './componente-btn.component';

describe('ComponenteBtnComponent', () => {
  let component: ComponenteBtnComponent;
  let fixture: ComponentFixture<ComponenteBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteBtnComponent]
    });
    fixture = TestBed.createComponent(ComponenteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
