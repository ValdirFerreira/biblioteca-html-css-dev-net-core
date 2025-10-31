import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoDarkComponent } from './modo-dark.component';

describe('ModoDarkComponent', () => {
  let component: ModoDarkComponent;
  let fixture: ComponentFixture<ModoDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModoDarkComponent]
    });
    fixture = TestBed.createComponent(ModoDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
