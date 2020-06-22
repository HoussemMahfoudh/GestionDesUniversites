import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerSalleComponent } from './lister-salle.component';

describe('ListerSalleComponent', () => {
  let component: ListerSalleComponent;
  let fixture: ComponentFixture<ListerSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
