import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DialogComponent} from './users/dialog/dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoInfoComponent} from './todos/todo-info/todo-info.component';
import {RootStoreModule} from './root-store/root-store.module';
import {UsersModule} from './users/users.module';
import {TodosModule} from './todos/todos.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    SharedModule,
    UsersModule,
    TodosModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, TodoInfoComponent]
})
export class AppModule { }
