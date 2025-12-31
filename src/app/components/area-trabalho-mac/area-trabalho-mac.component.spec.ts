import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTrabalhoMacComponent } from './area-trabalho-mac.component';

describe('AreaTrabalhoMacComponent', () => {
  let component: AreaTrabalhoMacComponent;
  let fixture: ComponentFixture<AreaTrabalhoMacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaTrabalhoMacComponent]
    });
    fixture = TestBed.createComponent(AreaTrabalhoMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
