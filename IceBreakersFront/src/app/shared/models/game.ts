import { generate } from "shortid";

export class Game {
    id?: string;
    name: string;
    facilitatorUrl: string;
    participantUrl: string;
    players: Players[];

    constructor(name:string){
        this.name = name;
        this.facilitatorUrl= generate();
        this.participantUrl= generate();
        //this.players= null;
    } 
}

export class Players {
    id?: string;
    namePlayer: string;
    imageUrl: string;

    constructor (namePlayer: string, imageUrl: string){
        this.namePlayer =  namePlayer;
        this.imageUrl = imageUrl;

    }
}