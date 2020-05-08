import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Game } from 'src/app/shared/models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gamesRef: AngularFirestoreCollection<Game>;
  game:Game;
  constructor(private firestore: AngularFirestore) { 
    this.gamesRef = this.firestore.collection<Game>('games');
  }

  createGame(gameName:string){
    
     this.game = {
      name : gameName, 
      facilitatorUrl: "jfdsh",
      participantUrl: "asfoi",     
     }     
    
    return this.gamesRef.add(this.game);  

  }
}