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
    
    // deserialize(input: any) {
    //     Object.assign(this, input);
    //     return this;
    //   }
}
