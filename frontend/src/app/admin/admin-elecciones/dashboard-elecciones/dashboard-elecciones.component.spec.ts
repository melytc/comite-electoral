import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEleccionesComponent } from './dashboard-elecciones.component';

describe('DashboardEleccionesComponent', () => {
  let component: DashboardEleccionesComponent;
  let fixture: ComponentFixture<DashboardEleccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEleccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
