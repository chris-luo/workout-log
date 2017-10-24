import { Exercise } from "./exercise.model";

export class ExerciseService {
    private exercises: Exercise[] = [
        new Exercise('Squat', 'Leg for days', ''),
        new Exercise('Bench Press', 'Chest for days', ''),
        new Exercise('Deadlift', 'Everything for days', '')
    ]

    getExercises() {
        return this.exercises.slice();
    }
}