import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css']
})
export class GameCreationComponent implements OnInit {

  constructor() { 
   }

   gameName : string = '';

  ngOnInit() {
  }

  createGame(){
    console.log("juego creado:" + this.gameName);
  }

}
