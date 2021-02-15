import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AssociadoFormComponent } from './associado-form/associado-form.component'
import { AssociadoListaComponent } from './associado-lista/associado-lista.component';

const routes: Routes = [
  { path: 'associados', component: LayoutComponent, children:[
    { path: 'form', component: AssociadoFormComponent},
    { path: 'form/:id', component: AssociadoFormComponent},
    { path: 'lista', component: AssociadoListaComponent},
    { path: '', redirectTo: '/associados/lista',pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadoRoutingModule { }
