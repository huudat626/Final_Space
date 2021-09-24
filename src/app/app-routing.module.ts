import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './modules/layouts/home/item/item.component';

import { HomeComponent } from './modules/layouts/home/home.component';
import { ItemIdComponent } from './modules/layouts/home/item-id/item-id.component';


const routes: Routes = [
  // { // default route => /home
  //   path: '',
  // component:HomeComponent
  // },
  {
    path:"character/:id",
    component: ItemIdComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
