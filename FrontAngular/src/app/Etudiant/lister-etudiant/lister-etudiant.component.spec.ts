import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEtudiantComponent } from './lister-etudiant.component';

describe('ListerEtudiantComponent', () => {
  let component: ListerEtudiantComponent;
  let fixture: ComponentFixture<ListerEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
