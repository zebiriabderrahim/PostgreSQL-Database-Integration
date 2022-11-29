import { NextFunction, Request, Response, Router } from "express";
import { inject, injectable } from "inversify";
import * as pg from "pg";
import { DatabaseService } from "../services/database.service";
import Types from "../types";
import { PlanRepas } from "../interfaces/plan-repas";

@injectable()
export class DatabaseController {
  public constructor(
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {}

  public get router(): Router {
    const router: Router = Router();
    
    router.get("/plans-repas", async (req: Request, res: Response, _: NextFunction)=> {
        this.databaseService.getMealPlans().then((result: pg.QueryResult) => {
          const plans: PlanRepas[] = result.rows.map((mealPlan: PlanRepas) => ({
            numeroplan: mealPlan.numeroplan,
            categorie: mealPlan.categorie,
            frequence: mealPlan.frequence,
            nbrpersonnes: mealPlan.nbrpersonnes,
            nbrcalories: mealPlan.nbrcalories,
            prix: mealPlan.prix,
            numerofournisseur: mealPlan.numerofournisseur,
          } as PlanRepas));
          res.json(plans);
        });
    });

    router.get('/Liste-fournisseurs', async (req: Request, res: Response,_: NextFunction) => {
     const lastVendorId = await this.databaseService.getListeNumeroFournisseurs();
     res.json(lastVendorId.rows);
   });

   router.post("/plans-repas", (req: Request, res: Response, _: NextFunction) => {
      
    const mealPlan: PlanRepas = {
      numeroplan: req.body.numeroplan,
      categorie: req.body.categorie,
      frequence: req.body.frequence,
      nbrpersonnes: req.body.nbrpersonnes,
      nbrcalories: req.body.nbrcalories,
      prix: req.body.prix,
      numerofournisseur: req.body.numerofournisseur,
    };
    
      this.databaseService
        .ajouterPlanRepas(mealPlan)
        .catch((e: Error) => {
          console.error(e.stack);
        });
  });

  router.put("/plans-repas", (req: Request, res: Response, _: NextFunction) => {
      
    const mealPlan: PlanRepas = {
      numeroplan: req.body.numeroplan,
      categorie: req.body.categorie,
      frequence: req.body.frequence,
      nbrpersonnes: req.body.nbrpersonnes,
      nbrcalories: req.body.nbrcalories,
      prix: req.body.prix,
      numerofournisseur: req.body.numerofournisseur,
    };
    
      this.databaseService
        .modifierPlanRepas(mealPlan)
        .catch((e: Error) => {
          console.error(e.stack);
        });
  });

  router.delete("/plans-repas/:id", (req: Request, res: Response, _: NextFunction) => {
      this.databaseService
        .supprimerPlansRepas(JSON.parse(req.params.id))
        .catch((e: Error) => {
          console.error(e.stack);
        });
  });

    return router;
  }
}
