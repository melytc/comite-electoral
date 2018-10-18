import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosRegistroComponent } from './candidatos-registro.component';

describe('CandidatosRegistroComponent', () => {
  let component: CandidatosRegistroComponent;
  let fixture: ComponentFixture<CandidatosRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
