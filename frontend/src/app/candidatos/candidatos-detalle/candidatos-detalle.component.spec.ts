import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosDetalleComponent } from './candidatos-detalle.component';

describe('CandidatosDetalleComponent', () => {
  let component: CandidatosDetalleComponent;
  let fixture: ComponentFixture<CandidatosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
