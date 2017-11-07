export class Exercise {
    constructor(
        public name: string, 
        public description: string, 
        public imagePath: string
    ) {}
}

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