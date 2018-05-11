import { User } from "./User";

export class Team{
    leaders: Array<User>;
    members: Array<User>;
    productOwners: Array<User>;
    ratedUsers: Array<String>;
    sprintTotal: number;
    velocity: number;
    teamName: string;
    rating: number;
    picture: string;
    url:string;

    constructor(){
        this.leaders = new Array<User>();
        this.members = new Array<User>();
        this.productOwners = new Array<User>();
        this.ratedUsers = new Array<String>();
        this.sprintTotal = 0;
        this.velocity = 0;
        this.teamName = '';
        this.rating = 0;
        this.picture = '';
        this.url = '';
    }
}