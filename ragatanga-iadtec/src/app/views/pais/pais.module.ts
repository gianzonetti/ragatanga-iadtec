import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaisComponent } from './pais.component';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PaisRoutingModule } from './pais-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaisRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ PaisComponent ]
})
export class PaisModule { }
