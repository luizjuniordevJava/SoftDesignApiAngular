import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { VotoFormComponent } from './voto-form/voto-form.component';
import { VotoListaComponent } from './voto-lista/voto-lista.component';

const routes: Routes = [
  { path: 'votos', component: LayoutComponent, 
    canActivate: [AuthGuard],
    children:[
      { path: 'form', component: VotoFormComponent},
      { path: 'form/:id', component: VotoFormComponent},
      { path: 'lista', component: VotoListaComponent},
      { path: '', redirectTo: '/votos/form',pathMatch: 'full'}

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotoRoutingModule { }
