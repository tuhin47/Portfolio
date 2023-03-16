import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path      : '',
    component : AboutComponent,
    children  : [
      /*{
        path       : '',
        redirectTo : 'login',
        pathMatch  : 'full',
      }*/
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
