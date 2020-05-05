import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCoverComponent } from './components/game-cover/game-cover.component';
import { GameDescriptionComponent } from './components/game-description/game-description.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCoverComponent,
    GameDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
