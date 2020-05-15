import { generate } from "shortid";

export class Game {
    id?: string;
    name: string;
    facilitatorUrl: string;
    participantUrl: string;

    constructor(name:string){
        this.name = name;
        this.facilitatorUrl= generate();
        this.participantUrl= generate();
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