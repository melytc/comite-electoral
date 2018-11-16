import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBloquesRegistroComponent } from './admin-bloques-registro.component';

describe('AdminBloquesRegistroComponent', () => {
  let component: AdminBloquesRegistroComponent;
  let fixture: ComponentFixture<AdminBloquesRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBloquesRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBloquesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
