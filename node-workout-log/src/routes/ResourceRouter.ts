import { Router, Request, Response, NextFunction } from "express";

export class ResourceRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getExercises(req: Request, res: Response, next: NextFunction) {
        //Get exercises from database.
        console.log(req);
    }

    init() {
        this.router.get('/exercises', this.getExercises);
    }
}

const resourceRoutes = new ResourceRouter();

export default resourceRoutes.router;