import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionCardComponent } from './eleccion-card.component';

describe('EleccionCardComponent', () => {
  let component: EleccionCardComponent;
  let fixture: ComponentFixture<EleccionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
