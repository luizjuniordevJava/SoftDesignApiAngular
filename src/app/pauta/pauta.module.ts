import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PautaRoutingModule } from './pauta-routing.module';
import { PautaFormComponent } from './pauta-form/pauta-form.component';
import { PautaListaComponent } from './pauta-lista/pauta-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PautaFormComponent, PautaListaComponent],
  imports: [
    CommonModule,
    PautaRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [PautaFormComponent, PautaListaComponent]
})
export class PautaModule { }
