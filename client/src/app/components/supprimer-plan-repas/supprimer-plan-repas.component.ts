import { Component, OnInit,ViewChild } from '@angular/core';
import { PlanRepas } from 'src/app/interfaces/plan-repas';
import { CommunicationService } from 'src/app/services/communication.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-delete-meal-plan',
  templateUrl: './supprimer-plan-repas.component.html',
  styleUrls: ['./supprimer-plan-repas.component.css']
})
export class SupprimerPlanRepasComponent implements OnInit {
  refresh:boolean
  dataSource : MatTableDataSource<PlanRepas>;
  displayedColumns: string[] = ['NumeroPlan', 'Categorie', 'Frequence', 'NombrePersonnes', 'Calories', 'Prix', 'Fournisseur', 'Actions'];

  constructor(public communicationService: CommunicationService) { }

  @ViewChild('paginator') paginator: MatPaginator;
  
  ngOnInit(): void {
    this.getToutPlansRepas(); 
  }
  getToutPlansRepas(): void {
    this.communicationService.getPlansRepas().subscribe((planRepas) => {
      this.dataSource = new MatTableDataSource<PlanRepas>(planRepas)
      this.dataSource.paginator = this.paginator; 
    })
  }
  supprimerPlanRepasvue(id: number){
    const indexPlan = this.dataSource.data.findIndex(plan=>id===plan.numeroplan);
    if (indexPlan !== -1) {
      this.dataSource.data.splice(indexPlan, 1);
    }
    this.dataSource.data=[...this.dataSource.data];
  }

  supprimerPlanRepas(id: number): void {
    this.communicationService.supprimerPlanRepas(id).subscribe();
    this.supprimerPlanRepasvue(id);
  }

}
