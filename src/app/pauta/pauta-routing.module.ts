import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PautaFormComponent } from './pauta-form/pauta-form.component';
import { PautaListaComponent } from './pauta-lista/pauta-lista.component';

const routes: Routes = [
  { path: 'pauta-form', component: PautaFormComponent},
  { path: 'pauta-form/:id', component: PautaFormComponent},
  { path: 'pauta-lista', component: PautaListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PautaRoutingModule { }
