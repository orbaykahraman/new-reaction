import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImportTimeComponent} from "./import-time/import-time.component";

const routes: Routes = [
  {path : "", component : ImportTimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
