import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameCoverComponent } from './components/game-cover/game-cover.component';


const routes: Routes = [
  {path:'', component:GameCoverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
