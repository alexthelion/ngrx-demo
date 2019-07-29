import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DialogComponent} from './users/dialog/dialog.component';
import {MAT_DIALOG_DATA, MatCardModule, MatDialogRef} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoInfoComponent} from './todos/todo-info/todo-info.component';
import {RootStoreModule} from './root-store/root-store.module';
import {UsersModule} from './users/users.module';
import {TodosModule} from './todos/todos.module';
import {SharedModule} from './shared/shared.module';
import {StorageModule} from '@ngx-pwa/local-storage';
import {fakeBackendProvider} from './services/fake-backend.interceptor';
import {CalendarComponent} from './calendar/calendar.component';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {CalendarModule, DateAdapter} from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    SharedModule,
    UsersModule,
    TodosModule,
    MatCardModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    StorageModule.forRoot({
      IDBNoWrap: true,
    })
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, TodoInfoComponent]
})
export class AppModule { }
