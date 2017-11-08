import * as express from "express";
import * as config from "config";
import * as http from "http";
import * as logger from "morgan";
import * as cors from "cors";
import * as pg from "pg";

export class App {
    public express: any;
    private server: any;
    private port: number;

    constructor() {
        const client = new pg.Client({
            user: config.get('DB_USER'),
            host: config.get('DB_HOST'),
            database: config.get('DB_DATABASE'),
            password: config.get('DB_PASSWORD'),
            port: config.get('DB_PORT'),
        });
        client.connect();
        client.query("SELECT * FROM person", (err, res) => {
            if (!err) {
                console.log(res.rows);
            }
            else {
                console.log(err);
            }
            client.end()
          });


        this.express = express();
        this.port = +config.get('PORT');
        this.createServer();
        this.listen();
    }

    private createServer(): void {
        this.server = http.createServer(this.express);
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(cors());
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }
}