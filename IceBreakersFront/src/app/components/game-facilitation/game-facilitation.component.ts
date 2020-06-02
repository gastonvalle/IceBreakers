import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { GameService } from "../../services/game.service";
import { Player, Vote } from 'src/app/shared/models/game'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-facilitation',
  templateUrl: './game-facilitation.component.html',
  styleUrls: ['./game-facilitation.component.css']
})
export class GameFacilitationComponent implements OnInit, OnDestroy {
  facilitatorUrl :string ;
  newidGame: string;
  listOfPlayers: Array<Player> = [];

  playerView: boolean = true;
  okForm: boolean = true;

  //subs
  subsListPlayer: Subscription;
  subsListGame: Subscription;



  constructor( private gameService: GameService, private route: ActivatedRoute, private platformLocation: PlatformLocation) { 
  }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.facilitatorUrl = params.get('facilitatorUrl');
    });

    //search idGame with playerUrl
    this.subsListGame=this.gameService.getGames().subscribe((gamesSnapshot) => {
      gamesSnapshot.forEach((gameData: any) => {
        //console.log ("en el forEach " + gameData.payload.doc.id);
        //console.log ("información ", typeof gameData.payload.doc.id);
        if (gameData.payload.doc.data().facilitatorUrl === this.facilitatorUrl)
        {
          this.newidGame = gameData.payload.doc.id;
          //console.log ("if comparacion playerUrl id game " + this.newidGame);
        }
      })
      if (this.newidGame == undefined){
        this.okForm = false;
      }
      else{
        this.loadInfoPlayers();
      }
    });
  }

  ngOnDestroy(){
    //las subscripciones unsuscribe y vaciar array
    this.listOfPlayers = [];
    this.subsListGame.unsubscribe;
    this.subsListGame.unsubscribe;
  }
  
  loadInfoPlayers(){
    //search all players with idGame
    this.subsListPlayer=this.gameService.getPlayers().subscribe((playersSnapshot) => {
      playersSnapshot.forEach((playerData: any) => {
        if (playerData.payload.doc.data().idGame== this.newidGame)
        {
          let playerToPush: Player = {id:playerData.payload.doc.id, ...playerData.payload.doc.data()}
          this.listOfPlayers.push(playerToPush);
        }
      })
      console.log("Players: ", this.listOfPlayers);
      });

  }
}
