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


export interface Player {
    id?: string;
    namePlayer: string;
    imageUrl: string;
    idGame: string; 
}

export interface Vote {
    id?: string;
    idGame: string;
    idPlayer: string;
    playerVote: string;
}

