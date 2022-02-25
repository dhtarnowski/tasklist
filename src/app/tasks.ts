export interface Task{
    id?: number; // Cuando una task viene una id podria no venir
    text: string;
    day: string;
    reminder: boolean;
}