import { Router, Request, Response, NextFunction } from "express";
import { dbPool } from "../functions/Database";
import { QueryResult } from "pg";
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

export class PersonRouter {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    public signup(req: Request, res: Response, next: NextFunction): Response | undefined {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() });
        }
        const user = matchedData(req);
        console.log(user);
        res.json(user);
    }

    private signupValidation() {
        return [
            check('email').isEmail(),
            check('password').matches('abcd')
        ]
    }

    init() {
        this.router.post('/signup', this.signupValidation(), this.signup);
    }
}

const personRoutes = new PersonRouter();

export default personRoutes.router;