import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { GameService } from "../../services/game.service";
import { Votes, Player } from 'src/app/shared/models/game'; 
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  lenghtInfo: number;
  posInfo: number;
  idPlayer: string;
  playerVote: string;
  vote : Votes;

  rootUrl: string;
  playerUrl: string;

  newidGame: string;
  
  //subs
  subscriptionList: Subscription [];

  //form
  form = new FormGroup({
    whois: new FormControl('', Validators.required)
  });


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

  }

  ngOnDestroy(){
    //las subscripciones y vaciar array
    this.listOfPlayers = [];
  }

  loadInfoPlayers(){
  //search all players with idGame
    this.listOfPlayers = [];
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

  createPlayer(){
    if ((this.namePlayer != undefined)&&(this.imageUrl != undefined)&&(this.namePlayer != "")&&(this.imageUrl != "")) {
      this.player = this.gameService.createPlayer(this.namePlayer, this.imageUrl, this.newidGame);
      this.isPlayerCreated = true;
    }
    else{
      alert("Debe introducir los datos");
    }
  }

  createVote(informationvote: string){
    this.lenghtInfo = informationvote.length;
    if (this.lenghtInfo>2){
      this.posInfo = informationvote.search("/");
      this.idPlayer = informationvote.slice(0, this.posInfo);
      this.playerVote = informationvote.slice(this.posInfo+1);

      this.vote = this.gameService.createVote(this.newidGame, this.idPlayer, this.playerVote);
      console.log("idPlayer createVote: ", this.idPlayer);
      console.log("player vote ",  this.playerVote);
    }
    else{
      alert("Debe introducir el nombre del jugador");
    }
    
  }

  submitWhois(){
    console.log(this.form.value);
    this.createVote(this.form.value.whois);
  }


}
