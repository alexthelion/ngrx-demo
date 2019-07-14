import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './user/users/users.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Users List' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
