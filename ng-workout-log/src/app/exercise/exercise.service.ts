import { Exercise, LogEntry } from "./exercise.model";

export class ExerciseService {
    private exercises: Exercise[] = [
        new Exercise('Squat', 'Leg for days', ''),
        new Exercise('Bench Press', 'Chest for days', ''),
        new Exercise('Deadlift', 'Everything for days', '')
    ]

    private logEntries: LogEntry[] = [];

    getExercises() {
        return this.exercises.slice();
    }

    getExercise(index: number) {
        return this.exercises.slice()[index];
    }

    addLogEntry(logEntry: LogEntry) {
        this.logEntries.push(logEntry);
    }
}