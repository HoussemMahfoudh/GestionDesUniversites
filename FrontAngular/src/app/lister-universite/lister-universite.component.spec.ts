import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerUniversiteComponent } from './lister-universite.component';

describe('ListerUniversiteComponent', () => {
  let component: ListerUniversiteComponent;
  let fixture: ComponentFixture<ListerUniversiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerUniversiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
