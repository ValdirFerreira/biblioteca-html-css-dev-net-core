import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnAutoComponent } from './msn-auto.component';

describe('MsnAutoComponent', () => {
  let component: MsnAutoComponent;
  let fixture: ComponentFixture<MsnAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsnAutoComponent]
    });
    fixture = TestBed.createComponent(MsnAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
