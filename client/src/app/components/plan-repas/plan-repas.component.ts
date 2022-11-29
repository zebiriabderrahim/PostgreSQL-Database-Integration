import {Component, OnInit, ViewChild } from '@angular/core';
import { PlanRepas } from 'src/app/interfaces/plan-repas';
import { CommunicationService } from 'src/app/services/communication.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-plan-repas',
  templateUrl: './plan-repas.component.html',
  styleUrls: ['./plan-repas.component.css']
})
export class PlanRepasComponent implements OnInit {
  dataSource : MatTableDataSource<PlanRepas>;
  displayedColumns: string[] = ['NumeroPlan', 'Categorie', 'Frequence', 'NombrePersonnes', 'Calories', 'Prix', 'Fournisseur'];
  constructor(private communicationService: CommunicationService) { }

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
}