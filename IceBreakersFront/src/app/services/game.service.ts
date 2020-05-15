import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Game } from 'src/app/shared/models/game';
import { Players } from 'src/app/shared/models/game';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  gamesRef: AngularFirestoreCollection<Game>;
  games: Observable<Game[]>;

  playersRef: AngularFirestoreCollection<Players>;
  players: Observable<Players[]>;
  
  constructor(private firestore: AngularFirestore) { 
    this.gamesRef = this.firestore.collection<Game>('games');
    this.games = this.gamesRef.valueChanges({idField: 'id'});

    this.playersRef = this.firestore.collection<Players>('players');
    this.players = this.playersRef.valueChanges({idField: 'id'})
  }

  createGame(gameName:string) :Game{
    var game = new Game(gameName);
        
    this.gamesRef.add({...game});
    return game;
  }


  createPlayer(namePlayer:string, imageUrl:string) {
    var player = new Players(namePlayer, imageUrl);

    //this.gamesRef.add({...game});
    //ok players this.playersRef.doc('/yKEjBH4BLBrEdB0FeyYw').update({...player});
    //ok update players in game this.gamesRef.doc('/IhNmu5Ued1xRqWF8MT4o/players/r8lQQDVELsC7LBssYj2O').update({...player});
    this.gamesRef.doc('/IhNmu5Ued1xRqWF8MT4o/players/identificador').set({...player});
    //this.playersRef.doc('/yKEjBH4BLBrEdB0FeyYw').delete();
    //this.playersRef.add({...player});
    return player;
  }
} 