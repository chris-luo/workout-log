import * as express from "express";
import * as config from "config";
import * as http from "http";
import * as logger from "morgan";
import * as cors from "cors";
import * as bodyParser from "body-parser";

import ResourceRouter from "./routes/ResourceRouter";
import PersonRouter from "./routes/PersonRouter";

export class App {
    public express: any;
    private server: any;
    private port: number;

    constructor() {
        this.express = express();
        this.port = +config.get('PORT');
        this.createServer();
        this.middleware();
        this.mountRoutes();
        this.listen();
    }

    private createServer(): void {
        this.server = http.createServer(this.express);
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(cors());
        this.express.use(bodyParser.json());
    }

    private mountRoutes() {
        this.express.use('/resources', ResourceRouter);
        this.express.use('/users', PersonRouter);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }
}