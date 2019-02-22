import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { PaisComponent } from './pais.component';
import { PaisRoutingModule } from './pais-routing.module';

@NgModule({
  imports: [
    FormsModule,
    PaisRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ PaisComponent ]
})
export class PaisModule { }
