import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    private resourcesEp: string = 'http://localhost:3000/resources';
    constructor(private http: Http) {}

    public getExercises() {
        return this.http.get(`${this.resourcesEp}/exercises`)
            .map(res => res.json());
    }
    
}