import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanRepas } from 'src/app/interfaces/plan-repas';
import { CommunicationService } from 'src/app/services/communication.service';
import { BoiteDialogueComponent } from '../boite-dialogue/boite-dialogue.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-modifier-plan-repas',
  templateUrl: './modifier-plan-repas.component.html',
  styleUrls: ['./modifier-plan-repas.component.css']
})
export class ModifierPlanRepasComponent implements OnInit {
  dataSource : MatTableDataSource<PlanRepas>;
  listeFournisseurs: number[];
  displayedColumns: string[] = ['NumeroPlan', 'Categorie', 'Frequence', 'NombrePersonnes', 'Calories', 'Prix', 'Fournisseur', 'Actions'];

  constructor(private communicationService: CommunicationService, private modifierPlanRepasDialog: MatDialog) { }
  @ViewChild('paginator') paginator: MatPaginator;

  ngOnInit(): void {
    this.getToutPlansRepas();
    this.getToutFournisseurs() 
  }

  getToutPlansRepas(): void {
    this.communicationService.getPlansRepas().subscribe((planRepas) => {
      this.dataSource = new MatTableDataSource<PlanRepas>(planRepas)
      this.dataSource.paginator = this.paginator; 
    })
  }

  getToutFournisseurs(){
    this.communicationService.getListFournisseurs().subscribe((listeFournisseurs) => {
      this.listeFournisseurs = listeFournisseurs.map((fournisseur)=>fournisseur.numerofournisseur);
    })
  }

  ouvrirModifierDialog(planRepas: PlanRepas): void {
    const dialogRef = this.modifierPlanRepasDialog.open(BoiteDialogueComponent, {data:{planRepas: planRepas,listeFournisseurs:this.listeFournisseurs}})
    dialogRef.afterClosed().subscribe(() => {this.getToutPlansRepas();} );
  }
}
