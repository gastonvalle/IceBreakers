import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, Query } from '@angular/fire/firestore';
import { Game } from 'src/app/shared/models/game';
import { Player } from 'src/app/shared/models/game';
import { Vote } from 'src/app/shared/models/game';
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

    this.firestore.collection('games').add({...game}).then(()=>{
      console.log("Game creado correctamente");
    },(error)=>{
      console.error(error);
    });

    return game;
  }


  createPlayer(namePlayer:string, imageUrl:string, idGame: string) {
    let player: Player;
    player = {namePlayer:namePlayer, imageUrl:imageUrl, idGame:idGame};

    this.firestore.collection('players').add({...player}).then(()=>{
      console.log("Player creado correctamente");
    },(error)=>{
      console.error(error);
    });

    return player;
  }

  createVote (idGame: string, idPlayer: string, playerVote: string){
    let votes: Vote;
    votes = {idGame:idGame, idPlayer:idPlayer, playerVote:playerVote};

    this.firestore.collection('votes').add({...votes}).then(()=>{
      console.log("Voto creado correctamente");
    },(error)=>{
      console.error(error);
    });

    return votes;
  }

  getGames() {
    return this.firestore.collection('games').snapshotChanges();
  }

  getPlayers(){
    return this.firestore.collection('players').snapshotChanges();
  }

  getVotes(){
    return this.firestore.collection('votes').snapshotChanges();
  }

} 