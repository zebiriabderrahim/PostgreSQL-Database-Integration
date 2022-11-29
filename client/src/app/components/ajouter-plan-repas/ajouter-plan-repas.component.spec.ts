import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPlanRepasComponent } from './ajouter-plan-repas.component';

describe('AjouterPlanRepasComponent', () => {
  let component: AjouterPlanRepasComponent;
  let fixture: ComponentFixture<AjouterPlanRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPlanRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPlanRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
