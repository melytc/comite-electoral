import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDbComponent } from './admin-db.component';

describe('AdminDbComponent', () => {
  let component: AdminDbComponent;
  let fixture: ComponentFixture<AdminDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
