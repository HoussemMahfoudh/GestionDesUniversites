import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEnseignantComponent } from './modifier-enseignant.component';

describe('ModifierEnseignantComponent', () => {
  let component: ModifierEnseignantComponent;
  let fixture: ComponentFixture<ModifierEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
