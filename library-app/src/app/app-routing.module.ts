import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddBookComponent} from './add-book/add-book.component';

import { ListBookComponent } from './list-book/list-book.component';
import {UpdateBookComponent} from './update-book/update-book.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [{
  path:'list',
  component:ListBookComponent
},
{
  path:'add',
  component:AddBookComponent
},
{
  path:'update/:id',
  component:UpdateBookComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
;