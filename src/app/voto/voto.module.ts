import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotoRoutingModule } from './voto-routing.module';
import { VotoFormComponent } from './voto-form/voto-form.component';
import { FormsModule } from '@angular/forms';
import { VotoListaComponent } from './voto-lista/voto-lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [VotoFormComponent, VotoListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    VotoRoutingModule
  ],
  exports: [VotoFormComponent,VotoListaComponent]
})
export class VotoModule { }
