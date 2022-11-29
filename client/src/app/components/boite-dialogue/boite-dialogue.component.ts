import { Component, Inject} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanRepas } from 'src/app/interfaces/plan-repas';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-boite-dialogue',
  templateUrl: './boite-dialogue.component.html',
  styleUrls: ['./boite-dialogue.component.css']
})
export class BoiteDialogueComponent {
  listeFournisseurs:number[];
  planRepas : PlanRepas = <PlanRepas>{categorie: ''};
  ajoutForm = new FormGroup({
    controlCategorie: new FormControl('', Validators.required),
    controlFrequence: new FormControl('',[Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]),
    controlNbrPersonnes: new FormControl('',[Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]),
    controlNbrCalories: new FormControl('',[Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]),
    controlPrix: new FormControl('',[Validators.required, Validators.min(0.01), Validators.pattern("^[0-9]+(.[0-9]{1,2})?$")]),
    controlnumerofournisseur: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<BoiteDialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private communicationService: CommunicationService) {} 

  ngOnInit(): void {
    if (this.data.planRepas){
      this.planRepas = this.data.planRepas;
    }
    this.listeFournisseurs = this.data.listeFournisseurs;
  }

 
  ajouterPlansRepas() : void {
    this.communicationService.ajouterPlanRepas(this.planRepas).subscribe();
    this.dialogRef.close();
  }

  
  modifierPlanRepas() : void {
    this.communicationService.modifierPlanRepas(this.planRepas).subscribe();
    this.dialogRef.close();
  }
}
