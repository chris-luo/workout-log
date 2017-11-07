import { LogEntry } from "./logs.model";

export class LogsService {
    logs: LogEntry[] = [];

    addLogEntry(logEntry: LogEntry) {
        this.logs.push(logEntry);
    }
}