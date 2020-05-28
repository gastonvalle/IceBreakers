import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformLocation } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

import { GameService } from "../../services/game.service";
import { Players, Game, Votes, Player } from 'src/app/shared/models/game'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {

  constructor(private gameService: GameService, private route: ActivatedRoute, private platformLocation: PlatformLocation) { 
    //this.rootUrl = (platformLocation as any).location;
  }
  //var to show information in the screen
  isPlayerCreated: boolean;
  isAddPlayer: boolean;
  isPlay: boolean;

  //information about the player
  namePlayer: string;
  imageUrl: string;
  player: Player;
  listOfPlayers: Array<Player> = [];


  //information about votess
  vote: Votes;
  opcionSelecWhois: string;
  indice: number = 0;

  rootUrl: string;
  playerUrl: string;

  //proof 
  newidGame: string;
  
  //subs
  subscriptionList: Subscription [];


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playerUrl = params.get('playerUrl');
      console.log ("playerUrl" + this.playerUrl);
    });

    //search idGame with playerUrl
    this.gameService.getGames().subscribe((gamesSnapshot) => {
      gamesSnapshot.forEach((gameData: any) => {
        //console.log ("en el forEach " + gameData.payload.doc.id);
        //console.log ("información ", typeof gameData.payload.doc.id);
        if (gameData.payload.doc.data().participantUrl === this.playerUrl)
        {
          this.newidGame = gameData.payload.doc.id;
          //console.log ("if comparacion playerUrl id game " + this.newidGame);
        }
      })
    });


    //search all players with idGame
    this.gameService.getPlayers().subscribe((playersSnapshot) => {
      playersSnapshot.forEach((playerData: any) => {
        if (playerData.payload.doc.data().idGame== this.newidGame)
        {
          /*let playerToPush : Player = {
            id:playerData.payload.doc.id, 
            namePlayer:playerData.payload.doc.data().namePlayer,
            imageUrl:playerData.payload.doc.data().imageUrl,
            idGame:playerData.payload.doc.data().idGame
          };*/
          let playerToPush: Player = {id:playerData.payload.doc.id, ...playerData.payload.doc.data()}
          this.listOfPlayers.push(playerToPush);
        }
      })
      console.log("Players: ", this.listOfPlayers);
    });
  }

  ngOnDestroy(){
    //las subscripciones y vaciar array
    this.listOfPlayers = [];
  }

  createPlayer(){
    this.player = this.gameService.createPlayer(this.namePlayer, this.imageUrl, this.newidGame);
    this.isPlayerCreated = true;
  }

  createVote(idPlayer, playerVote){
    this.vote = this.gameService.createVote(this.newidGame, idPlayer, playerVote);
    this.opcionSelecWhois = '0';
    console.log("idPlayer createVote: ", idPlayer);
    console.log("player vote ",  playerVote);
  }


}
