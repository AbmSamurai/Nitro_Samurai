import { User } from "./User";

export class Team{
    leaders: Array<User>;
    members: Array<User>;
    productOwners: Array<User>;
    sprintTotal: number;
    velocity: number;
    teamName: string;
    rating: number;
    picture: string;

    constructor(){
        this.leaders = new Array<User>();
        this.members = new Array<User>();
        this.productOwners = new Array<User>();
    }
}