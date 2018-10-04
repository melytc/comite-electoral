import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrosComponent } from './admin-registros.component';

describe('AdminRegistrosComponent', () => {
  let component: AdminRegistrosComponent;
  let fixture: ComponentFixture<AdminRegistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegistrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
