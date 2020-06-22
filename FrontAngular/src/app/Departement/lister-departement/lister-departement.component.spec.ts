import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerDepartementComponent } from './lister-departement.component';

describe('ListerDepartementComponent', () => {
  let component: ListerDepartementComponent;
  let fixture: ComponentFixture<ListerDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
