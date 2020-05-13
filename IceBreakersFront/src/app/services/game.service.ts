import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Game } from 'src/app/shared/models/game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  gamesRef: AngularFirestoreCollection<Game>;
  games: Observable<Game[]>;
  
  constructor(private firestore: AngularFirestore) { 
    this.gamesRef = this.firestore.collection<Game>('games');
    this.games = this.gamesRef.valueChanges({idField: 'id'});
  }

  createGame(gameName:string) :Game{
    var game = new Game(gameName);
        
    this.gamesRef.add({...game});
    return game;
  }  
} 