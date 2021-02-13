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
  sucesso: boolean = false;
  errors: String[];

  constructor( private service: AssociadoService) {
    this.associado = new Associado();
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service
    .salvar(this.associado)
    .subscribe( response =>{
      this.sucesso = true;
      this.errors = null;
      this.associado = response;
    }, errorResponse =>{
      //console.log(errorResponse.error.errors);
      this.errors = errorResponse.error.errors;
      this.sucesso = false;
    }
    
    )
  }

}
