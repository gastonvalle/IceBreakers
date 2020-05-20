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
    
    var game = new Game("provanom");

    // Create a query against the collection
    //let queryRef = this.gamesRef.get('/participantUrl/F5RJvk31Y3');

    //game.players[1].namePlayer= namePlayer;
    //game.players[1].imageUrl=imageUrl;
    var player = new Players(namePlayer, imageUrl); 

    //this.gamesRef.doc('/IhNmu5Ued1xRqWF8MT4o/').set({...game});
    this.gamesRef.doc('/IhNmu5Ued1xRqWF8MT4o/players/0').set({...player});
    //this.playersRef.add({...player});
    return player;
  }
} 