import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEtudiantComponent } from './modifier-etudiant.component';

describe('ModifierEtudiantComponent', () => {
  let component: ModifierEtudiantComponent;
  let fixture: ComponentFixture<ModifierEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
