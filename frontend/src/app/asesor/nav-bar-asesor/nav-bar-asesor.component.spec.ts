import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAsesorComponent } from './nav-bar-asesor.component';

describe('NavBarAsesorComponent', () => {
  let component: NavBarAsesorComponent;
  let fixture: ComponentFixture<NavBarAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
