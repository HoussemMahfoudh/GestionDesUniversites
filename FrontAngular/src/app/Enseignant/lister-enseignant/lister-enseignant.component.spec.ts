import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEnseignantComponent } from './lister-enseignant.component';

describe('ListerEnseignantComponent', () => {
  let component: ListerEnseignantComponent;
  let fixture: ComponentFixture<ListerEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
