import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {Todo} from './todos/store/todo.model';
import {TodosComponent} from './todos/todos.component';


const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    data: { title: 'Todos' }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Users List' }
  },
  { path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
