import * as config from "config";
import { Pool, Client, QueryResult } from "pg";

export class DBPool {
    pool: any;

    constructor() {
        console.log('new dbpool');
        this.pool = new Pool({
            user: config.get('DB_USER'),
            host: config.get('DB_HOST'),
            database: config.get('DB_DATABASE'),
            password: config.get('DB_PASSWORD'),
            port: config.get('DB_PORT')
        });
        this.pool.on('error', (err: Error, client: Client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        });
    }

    public get(query: string, callback: (results: QueryResult) => void) {
        this.pool.connect((error: Error, client: Client, done: () => void) => {
            if (error) {
                console.log(error);
                return error;
            }
            client.query(query, (error: Error, results: QueryResult) => {
                done();
                if (error) {
                    console.log(error);
                    return error;
                }
                callback(results);
            })
        })
    }
}

const dbPool = new DBPool();

export { dbPool }