import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonsModule,
  IconsModule,
  InputsModule,
  MDBBootstrapModule,
  PopoverModule,
  TooltipModule,
  WavesModule
} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    PopoverModule,
    TooltipModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    IconsModule
  ],
  exports: [
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
