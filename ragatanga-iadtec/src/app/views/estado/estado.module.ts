import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { EstadoComponent } from './estado.component';
import { EstadoRoutingModule } from './estado-routing.module';

@NgModule({
  imports: [
    FormsModule,
    EstadoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ EstadoComponent ]
})
export class EstadoModule { }
