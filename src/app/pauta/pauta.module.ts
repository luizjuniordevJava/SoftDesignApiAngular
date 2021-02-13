import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PautaRoutingModule } from './pauta-routing.module';
import { PautaFormComponent } from './pauta-form/pauta-form.component';


@NgModule({
  declarations: [PautaFormComponent],
  imports: [
    CommonModule,
    PautaRoutingModule
  ]
})
export class PautaModule { }
