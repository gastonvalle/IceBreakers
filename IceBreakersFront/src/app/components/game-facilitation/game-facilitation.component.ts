import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-facilitation',
  templateUrl: './game-facilitation.component.html',
  styleUrls: ['./game-facilitation.component.css']
})
export class GameFacilitationComponent implements OnInit {
  facilitatorUrl :string ;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.facilitatorUrl = params.get('facilitatorUrl');
    });
  }
}
