import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteDialogueComponent } from './boite-dialogue.component';

describe('BoiteDialogueComponent', () => {
  let component: BoiteDialogueComponent;
  let fixture: ComponentFixture<BoiteDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiteDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoiteDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
