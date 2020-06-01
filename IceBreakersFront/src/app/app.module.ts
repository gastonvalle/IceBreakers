import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCoverComponent } from './components/game-cover/game-cover.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';
import { GameCreationComponent} from './components/game-creation/game-creation.component';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Imagenes
//import { AngularFireStorageModule } from '@angular/fire/storage';
//import { StorageBucket } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameFacilitationComponent } from "./components/game-facilitation/game-facilitation.component";
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCoverComponent,
    GameDescriptionComponent,
    GameCreationComponent,
    GameFacilitationComponent,
    PlayerComponent
  ],
  imports: [
    //FireStore
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    //AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    //Angular Material
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatDividerModule,
    //
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: GameCoverComponent },
      { path: 'facilitation/:facilitatorUrl', component: GameFacilitationComponent },
      { path: 'player/:playerUrl', component: PlayerComponent },
    ])
  ],
  providers: [
    //Imagenes fichero (revisar)
    //{provide: StorageBucket, useValue:'gs://icebeakers-8e7a8.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MainModule { }
