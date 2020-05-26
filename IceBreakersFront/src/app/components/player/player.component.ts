import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

import { GameService } from "../../services/game.service";
import { Players, Game, Votes } from 'src/app/shared/models/game'; 

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private gameService: GameService, private route: ActivatedRoute, private platformLocation: PlatformLocation) { 
    //this.rootUrl = (platformLocation as any).location;
  }
  isPlayerCreated: boolean = false;
  isAddPlayer: boolean = false;
  isPlay: boolean = false;

  namePlayer: string;
  imageUrl: string;
  player: Players;

  vote: Votes;

  rootUrl: string;
  playerUrl: string;

  numplayer: number;
  newidGame;
  
 // players: Players[];
  playerprova: Players;
  dataprova;
  
players = [
  {id: 'Jb5q12m52fF6UUUmw33i', namePlayer: 'elenita', imageUrl: 'casa', idGame: '3mkpLtNMfTCtOECaTqKA'},
  {id: 'WV8NebywUzs55edoHZ4c', namePlayer: 'xavi', imageUrl: 'muntanya', idGame: '3mkpLtNMfTCtOECaTqKA'},
  {id: 'g45hvRCNGuGj5WIcINO2', namePlayer: 'prova', imageUrl: 'imatgeprova', idGame: '3mkpLtNMfTCtOECaTqKA'},
];




  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playerUrl = params.get('playerUrl');
      console.log ("playerUrl" + this.playerUrl);
    });

    //search idGame with playerUrl
    this.gameService.getGames().subscribe((gamesSnapshot) => {
      gamesSnapshot.forEach((gameData: any) => {
        //console.log ("en el forEach " + gameData.payload.doc.id);
        //console.log ("información " + gameData.payload.doc.data().participantUrl);
        if (gameData.payload.doc.data().participantUrl== this.playerUrl)
        {
          this.newidGame = gameData.payload.doc.id;
          console.log ("if comparacion playerUrl id game " + this.newidGame);
        }
      })
    });

    //search all players with idGame
    this.gameService.getPlayers().subscribe((playersSnapshot) => {
      this.numplayer = 1;
      playersSnapshot.forEach((playerData: any) => {
        console.log ("en el forEach id " + playerData.payload.doc.id);
        console.log ("nom del jugador " + playerData.payload.doc.data().namePlayer);
        if (playerData.payload.doc.data().idGame== this.newidGame)
        {

          /*this.dataprova=playerData.payload.doc.data().namePlayer;
          this.dataprova= toString();
          console.log("informació " + playerData.payload.doc.data());
          this.playerprova.namePlayer = this.dataprova; */


          /*this.players[this.numplayer].id= playerData.payload.doc.id;
          this.players[this.numplayer].namePlayer = playerData.payload.doc.namePlayer;
          this.players[this.numplayer].imageUrl = playerData.payload.doc.imageUrl;
          this.players[this.numplayer].idGame = playerData.payload.doc.idGame;
          this.numplayer=this.numplayer+1;*/

          //console.log ("if comparacion playerUrl id game " + this.namePlayer);
        }
      })


      /*
          this.players[1].id= 'Jb5q12m52fF6UUUmw33i';
          this.players[1].namePlayer = 'elenita';
          this.players[1].imageUrl = 'casa';
          this.players[1].idGame = '3mkpLtNMfTCtOECaTqKA';
          */
    });

  }
  createPlayer(){
    this.player = this.gameService.createPlayer(this.namePlayer, this.imageUrl, this.newidGame);
    this.isPlayerCreated = true;
  }

  createVote(idPlayer, playerVote){
    this.vote = this.gameService.createVote(this.newidGame, idPlayer, playerVote);
  }



}
