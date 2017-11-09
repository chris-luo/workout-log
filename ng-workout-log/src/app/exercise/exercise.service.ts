import { Injectable } from "@angular/core";
import { Exercise } from "./exercise.model";
import { ApiService } from "../shared/api.service";

@Injectable()

export class ExerciseService {
    private exercises: Exercise[] = [
        new Exercise('Squat', 'Leg for days', ''),
        new Exercise('Bench Press', 'Chest for days', ''),
        new Exercise('Deadlift', 'Everything for days', '')
    ]

    constructor(private apiService: ApiService) {}

    getExercises() {
        this.apiService.getExercises()
            .subscribe(res => {
                this.exercises = res.data;

            });
        return this.exercises.slice();
    }

    getExercise(index: number) {
        return this.exercises.slice()[index];
    }
}