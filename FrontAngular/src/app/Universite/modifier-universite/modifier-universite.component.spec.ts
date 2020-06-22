import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUniversiteComponent } from './modifier-universite.component';

describe('ModifierUniversiteComponent', () => {
  let component: ModifierUniversiteComponent;
  let fixture: ComponentFixture<ModifierUniversiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierUniversiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
