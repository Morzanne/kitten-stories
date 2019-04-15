import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const routes: Routes = [

  {
    path: 'creation',
    component: CreateKittenComponent,
    pathMatch: "full",
  },
  {
    path: 'globalelist',
    component: ListKittenComponent,
    pathMatch: "full",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
