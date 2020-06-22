import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSalleComponent } from './ajouter-salle.component';

describe('AjouterSalleComponent', () => {
  let component: AjouterSalleComponent;
  let fixture: ComponentFixture<AjouterSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
