import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosListaComponent } from './candidatos-lista.component';

describe('CandidatosListaComponent', () => {
  let component: CandidatosListaComponent;
  let fixture: ComponentFixture<CandidatosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
