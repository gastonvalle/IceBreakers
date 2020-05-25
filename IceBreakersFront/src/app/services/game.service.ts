import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Game } from 'src/app/shared/models/game';
import { Players } from 'src/app/shared/models/game';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(private firestore: AngularFirestore) { 

  }

  createGame(gameName:string) :Game{
    var game = new Game(gameName);
        this.firestore.collection('games').add({...game});
    return game;
  }


  createPlayer(namePlayer:string, imageUrl:string, idGame: string) {
    
    var player = new Players(namePlayer, imageUrl, idGame); 
    this.firestore.collection('players').add({...player});

    return player;
  }

} 