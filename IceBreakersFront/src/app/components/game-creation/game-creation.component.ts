import { Component, OnInit, Inject } from '@angular/core';
import {PlatformLocation } from '@angular/common';

import { GameService } from "../../services/game.service";
import { Game } from 'src/app/shared/models/game'; 

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css']
})
export class GameCreationComponent implements OnInit {

  constructor(private gameService: GameService, private platformLocation: PlatformLocation) { 
   this.rootUrl = (platformLocation as any).location;
  }
   isGameCreated: boolean = false;
   gameName : string = '';
   game: Game;
   rootUrl:string;

  ngOnInit() {

  }

  createGame(){
    this.game = this.gameService.createGame(this.gameName);
    this.isGameCreated = true;
  }

}
