import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MDBBootstrapModule,
  WavesModule,
  InputsModule,
  ButtonsModule,
  PopoverModule,
  TooltipModule
} from 'angular-bootstrap-md';
import { TodosComponent } from './todos/todos.component';
import { DialogComponent } from './dialog/dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TodoCardComponent } from './todos/todo-card/todo-card.component';
import { TodoInfoComponent } from './todos/todo-info/todo-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    TodosComponent,
    DialogComponent,
    TodoCardComponent,
    TodoInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatDialogModule,
    PopoverModule,
    TooltipModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, TodoInfoComponent]
})
export class AppModule { }
