import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPlanRepasComponent } from './modifier-plan-repas.component';

describe('ModifierPlanRepasComponent', () => {
  let component: ModifierPlanRepasComponent;
  let fixture: ComponentFixture<ModifierPlanRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPlanRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPlanRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
