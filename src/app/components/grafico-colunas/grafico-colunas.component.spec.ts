import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoColunasComponent } from './grafico-colunas.component';

describe('GraficoColunasComponent', () => {
  let component: GraficoColunasComponent;
  let fixture: ComponentFixture<GraficoColunasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoColunasComponent]
    });
    fixture = TestBed.createComponent(GraficoColunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
