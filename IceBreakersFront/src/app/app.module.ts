import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCoverComponent } from './components/game-cover/game-cover.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';
import { GameCreationComponent} from './components/game-creation/game-creation.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameFacilitationComponent } from "./components/game-facilitation/game-facilitation.component";

@NgModule({
  declarations: [
    AppComponent,
    GameCoverComponent,
    GameDescriptionComponent,
    GameCreationComponent,
    GameFacilitationComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: GameCoverComponent },
      { path: 'facilitation/:facilitatorUrl', component: GameFacilitationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MainModule { }
