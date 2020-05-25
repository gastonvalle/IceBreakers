import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

import { GameService } from "../../services/game.service";
import { Players } from 'src/app/shared/models/game'; 

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
  idGame: string = 'IhNmu5Ued1xRqWF8MT4o';
  namePlayer: string;
  imageUrl: string;
  player: Players;
  rootUrl: string;
  playerUrl: string;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playerUrl = params.get('playerUrl');
    });
  }
  createPlayer(){
    this.player = this.gameService.createPlayer(this.namePlayer, this.imageUrl, this.idGame);
    this.isPlayerCreated = true;
  }

}
