import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { PlanRepas } from "../interfaces/plan-repas";

@Injectable()
export class CommunicationService {
  private readonly BASE_URL: string = "http://localhost:3000/database";
  public constructor(private http: HttpClient) {}

  private _listeners: any = new Subject<any>();

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  getPlansRepas(): Observable<PlanRepas[]> {
    return this.http
      .get<PlanRepas[]>(`${this.BASE_URL}/plans-repas`)
      .pipe(catchError(this.handleError<PlanRepas[]>("plans-repas")));
  }

  getListFournisseurs(): Observable<{numerofournisseur: number}[]> {
    return this.http
      .get<{numerofournisseur: number}[]>(`${this.BASE_URL}/Liste-fournisseurs`)
      .pipe(catchError(this.handleError<{numerofournisseur: number}[]>("Liste-fournisseurs")));
  }

  ajouterPlanRepas(planRepas: PlanRepas): Observable<number> {
    return this.http
      .post<number>(`${this.BASE_URL}/plans-repas`, planRepas)
      .pipe(catchError(this.handleError<number>("plans-repas")));
  }

  modifierPlanRepas(planRepas: PlanRepas): Observable<void> {
    return this.http
      .put<void>(`${this.BASE_URL}/plans-repas`, planRepas)
      .pipe(catchError(this.handleError<void>("plans-repas")));
  }

  supprimerPlanRepas(mealPlanID: number): Observable<void> {
    return this.http
      .delete<void>(`${this.BASE_URL}/plans-repas/${JSON.stringify(mealPlanID)}`)
      .pipe(catchError(this.handleError<void>("plans-repas")));
  }

  private handleError<T>(
    request: string,
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
