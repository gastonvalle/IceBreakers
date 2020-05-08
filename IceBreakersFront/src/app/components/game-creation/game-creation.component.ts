import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css']
})
export class GameCreationComponent implements OnInit {

  constructor(private gameService: GameService) { 
   }

   gameName : string = '';

  ngOnInit() {
  }

  createGame(){
    this.gameService.createGame(this.gameName);
  }

}
