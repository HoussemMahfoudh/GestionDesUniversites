import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCoursComponent } from './ajouter-cours.component';

describe('AjouterCoursComponent', () => {
  let component: AjouterCoursComponent;
  let fixture: ComponentFixture<AjouterCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
