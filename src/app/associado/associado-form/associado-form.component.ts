import { Component, OnInit } from '@angular/core';

import { Associado } from '../associado';
import { AssociadoService } from '../../associado.service'

@Component({
  selector: 'app-associado-form',
  templateUrl: './associado-form.component.html',
  styleUrls: ['./associado-form.component.css']
})
export class AssociadoFormComponent implements OnInit {

  associado: Associado;

  constructor( private service: AssociadoService) {
    this.associado = service.getAssociado();
  }

  ngOnInit(): void {
  }

  clicar(){
    console.log(this.associado.nome);
    
  }

}
