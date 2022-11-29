import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { AjouterPlanRepasComponent } from "../components/ajouter-plan-repas/ajouter-plan-repas.component";
import { SupprimerPlanRepasComponent } from "../components/supprimer-plan-repas/supprimer-plan-repas.component";
import { PlanRepasComponent } from "../components/plan-repas/plan-repas.component";
import { ModifierPlanRepasComponent } from "../components/modifier-plan-repas/modifier-plan-repas.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: 'plansRepas', component: PlanRepasComponent},
  { path: 'ajouter', component: AjouterPlanRepasComponent},
  { path: 'modifier', component: ModifierPlanRepasComponent},
  { path: 'supprimer', component: SupprimerPlanRepasComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
