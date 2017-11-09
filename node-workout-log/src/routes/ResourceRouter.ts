import { Router, Request, Response, NextFunction } from "express";
import { dbPool } from "../functions/Database";
import { QueryResult } from "pg";
import { Exercise } from "../model/Exercise";

export class ResourceRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getExercises(req: Request, res: Response, next: NextFunction) {
        //Get exercises from database.
        dbPool.get(`SELECT * FROM exercise`, (results: QueryResult) => {
            console.log(results.rows);
            const exercises: Exercise[] = []
            for (let row of results.rows) {
                exercises.push(new Exercise(row.exercise, row.description, row.image_path));
            }

            res.json({
                data: exercises
            });
        });
    }

    init() {
        this.router.get('/exercises', this.getExercises);
    }
}

const resourceRoutes = new ResourceRouter();

export default resourceRoutes.router;