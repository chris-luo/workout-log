import { LogEntry } from "./logs.model";

export class LogsService {
    logs: LogEntry[] = [
        { exercise: "Squat",
            dateTime: "2017-11-06T21:54:29-08:00",
            sets: [
                {weight: 225, reps: 5},
                {weight: 225, reps: 5},
                {weight: 225, reps: 5}
            ]
        }
    ];

    getLogs() {
        return this.logs.slice();
    }

    addLogEntry(logEntry: LogEntry) {
        this.logs.push(logEntry);
    }
}