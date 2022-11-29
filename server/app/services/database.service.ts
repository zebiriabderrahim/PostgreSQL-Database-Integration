import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { PlanRepas } from "../interfaces/plan-repas";

@injectable()
export class DatabaseService {
  public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "TP4_Livraison",
    password: "230506",
    port: 5432,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
    host: "127.0.0.1",
    keepAlive: true
  };
  
  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  public async getMealPlans(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const result = await client.query('SELECT * FROM Planrepas;');
    client.release();
    return result;
  }

  
  public async getListeNumeroFournisseurs(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const result = await client.query('SELECT numerofournisseur FROM Fournisseur;');
    client.release();
    return result;
  }

  public async ajouterPlanRepas(mealPlan: PlanRepas): Promise<void> {
    const client = await this.pool.connect();

    const values: (string | number)[] = [
      mealPlan.categorie,
      mealPlan.frequence,
      mealPlan.nbrpersonnes,
      mealPlan.nbrcalories,
      mealPlan.prix,
      mealPlan.numerofournisseur,
    ];
    const queryText: string = `INSERT INTO Planrepas (categorie, frequence, nbrpersonnes, nbrcalories, prix, numerofournisseur) VALUES($1, $2, $3, $4, $5, $6);`;
    await client.query(queryText, values);
    client.release();
  }


  public async modifierPlanRepas(plan: PlanRepas): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    
    const values: (string | number)[] = [
      plan.numeroplan,
      plan.categorie,
      plan.frequence,
      plan.nbrpersonnes,
      plan.nbrcalories,
      plan.prix,
      plan.numerofournisseur,
    ];
    
    const queryText: string = `UPDATE Planrepas SET categorie = $2, frequence = $3, nbrpersonnes = $4, nbrcalories = $5, prix = $6, numerofournisseur = $7 WHERE numeroplan = $1;`;
    const res = await client.query(queryText, values);
    client.release();
    return res;
  }

  public async supprimerPlansRepas(numeroPlan: number): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const values: (number)[] = [
      numeroPlan,
    ];

    const queryText: string = `DELETE FROM Planrepas WHERE numeroplan = $1;`;
    const res = await client.query(queryText, values);
    client.release()
    return res;
  }

}
