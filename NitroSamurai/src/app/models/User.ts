export class User{
    name:string;
    role: string;
    team:string;
    totalSprints: number;
    userUID: string;

    constructor(){
        this.name = "";
        this.role = "";
        this.team = "";
        this.totalSprints=0;
        this.userUID="";
    }
}