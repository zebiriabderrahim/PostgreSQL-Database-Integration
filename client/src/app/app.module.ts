import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { PlanRepasComponent } from './components/plan-repas/plan-repas.component';
import { AjouterPlanRepasComponent } from './components/ajouter-plan-repas/ajouter-plan-repas.component';
import { BoiteDialogueComponent } from './components/boite-dialogue/boite-dialogue.component';
import { ModifierPlanRepasComponent } from './components/modifier-plan-repas/modifier-plan-repas.component';
import { SupprimerPlanRepasComponent } from './components/supprimer-plan-repas/supprimer-plan-repas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    PlanRepasComponent,
    AjouterPlanRepasComponent,
    BoiteDialogueComponent,
    ModifierPlanRepasComponent,
    SupprimerPlanRepasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
