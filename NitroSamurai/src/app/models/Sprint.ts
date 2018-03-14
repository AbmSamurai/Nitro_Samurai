export class Sprint{
    endDate: string;
    startDate: string;
    open: boolean;
    comments: string;
    points: number;
    ratingsReceived: number;
    score: number;
    burndownData: Array<Burndown>;
    constructor(){
        this.burndownData = new Array<Burndown>();
    }
}

export interface Burndown{
    date: string;
    points: number;
}