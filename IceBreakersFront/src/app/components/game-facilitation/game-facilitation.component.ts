import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game, Players } from 'src/app/shared/models/game'; 

@Component({
  selector: 'app-game-facilitation',
  templateUrl: './game-facilitation.component.html',
  styleUrls: ['./game-facilitation.component.css']
})
export class GameFacilitationComponent implements OnInit {
  facilitatorUrl :string ;
  idGame: string = 'IhNmu5Ued1xRqWF8MT4o';
  game: Game;
  players: Players[];

  constructor( private route: ActivatedRoute) { 
  }

 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.facilitatorUrl = params.get('facilitatorUrl');
    });


  
  }


  
}
