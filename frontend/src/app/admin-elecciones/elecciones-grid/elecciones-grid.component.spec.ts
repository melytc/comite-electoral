import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionesGridComponent } from './elecciones-grid.component';

describe('EleccionesGridComponent', () => {
  let component: EleccionesGridComponent;
  let fixture: ComponentFixture<EleccionesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
