import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPlanRepasComponent } from './supprimer-plan-repas.component';

describe('DeleteMealPlanComponent', () => {
  let component: SupprimerPlanRepasComponent;
  let fixture: ComponentFixture<SupprimerPlanRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPlanRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerPlanRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
