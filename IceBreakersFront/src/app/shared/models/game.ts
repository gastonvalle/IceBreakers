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
    idGame: string;

    constructor (namePlayer: string, imageUrl: string, idGame: string){
        this.namePlayer =  namePlayer;
        this.imageUrl = imageUrl;
        this.idGame = idGame;
    }
}

export interface Player {
    id?: string;
    namePlayer: string;
    imageUrl: string;
    idGame: string;

    
}


export class Votes {
    id?: string;
    idGame: string;
    idPlayer: string;
    playerVote: string;

    constructor (idGame: string, idPlayer: string, playerVote: string){
        this.idGame =  idGame;
        this.idPlayer = idPlayer;
        this.playerVote = playerVote;
    }
}