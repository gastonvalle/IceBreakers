import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
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
    this.game = new Game(gameName);
        
    return this.gamesRef.add({...this.game});
  }  
}