import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

import { GameService } from "../../services/game.service";
import { Players, Game } from 'src/app/shared/models/game'; 

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
  
  newidGame;
  namePlayer: string;
  imageUrl: string;
  player: Players;
  rootUrl: string;
  playerUrl: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playerUrl = params.get('playerUrl');
      console.log ("playerUrl" + this.playerUrl);
    });

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

  }
  createPlayer(){
    this.player = this.gameService.createPlayer(this.namePlayer, this.imageUrl, this.newidGame);
    this.isPlayerCreated = true;
  }



}
