import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanRepas } from 'src/app/interfaces/plan-repas';
import { CommunicationService } from 'src/app/services/communication.service';
import { BoiteDialogueComponent } from '../boite-dialogue/boite-dialogue.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ajouter-plan-repas',
  templateUrl: './ajouter-plan-repas.component.html',
  styleUrls: ['./ajouter-plan-repas.component.css']
})
export class AjouterPlanRepasComponent implements OnInit {
  dataSource : MatTableDataSource<PlanRepas>;
  listeFournisseurs:number[];
  displayedColumns: string[] = ['NumeroPlan', 'Categorie', 'Frequence', 'NombrePersonnes', 'Calories', 'Prix', 'Fournisseur'];

  constructor(private communicationService: CommunicationService, public ajouterPlanRepasDialog: MatDialog) { }
  @ViewChild('paginator') paginator: MatPaginator;
 

  ngOnInit(): void {
    this.getToutPlansRepas();
    this.getToutFournisseurs() 
  }
  
  getToutPlansRepas(): void {
    this.communicationService.getPlansRepas().subscribe((plansRepas) => {
      this.dataSource = new MatTableDataSource<PlanRepas>(plansRepas)
      this.dataSource.paginator = this.paginator; 
    })
  }

  getToutFournisseurs(){
    this.communicationService.getListFournisseurs().subscribe((listeFournisseurs) => {
      this.listeFournisseurs = listeFournisseurs.map((fournisseur)=>fournisseur.numerofournisseur);
    })
  }

  ouvrirDialogAjouter(): void {
    const dialogRef = this.ajouterPlanRepasDialog.open(BoiteDialogueComponent, { data:{ listeFournisseurs: this.listeFournisseurs} });
    dialogRef.afterClosed().subscribe(() => { this.getToutPlansRepas(); } );
  }

}
