export class LogEntry {
    constructor(
        public exercise: string,
        public dateTime: string,
        public sets: { weight: number, reps: number}[]
    ) {}
}

export interface Set {
    weight: number,
    reps: number,
    dateTime: string
}