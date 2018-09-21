import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionDialogComponent } from './eleccion-dialog.component';

describe('EleccionDialogComponent', () => {
  let component: EleccionDialogComponent;
  let fixture: ComponentFixture<EleccionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
