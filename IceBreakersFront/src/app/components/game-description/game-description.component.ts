import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.css']
})
export class GameDescriptionComponent implements OnInit {

  public gametitle: string;

  constructor() {
    this.gametitle = "Who is?"
   }

  ngOnInit(): void {
  }

}
