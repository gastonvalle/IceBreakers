import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCoverComponent } from './components/game-cover/game-cover.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';
import { GameCreationComponent} from './components/game-creation/game-creation.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameCoverComponent,
    GameDescriptionComponent,
    GameCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
