import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactionComponent} from "./components/reaction/reaction.component";

const routes: Routes = [
  { path :"", component : ReactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
