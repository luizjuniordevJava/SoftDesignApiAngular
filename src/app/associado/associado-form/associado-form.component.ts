import { Component, OnInit } from '@angular/core';

import { Associado } from '../associado'

@Component({
  selector: 'app-associado-form',
  templateUrl: './associado-form.component.html',
  styleUrls: ['./associado-form.component.css']
})
export class AssociadoFormComponent implements OnInit {

  associado: Associado;

  constructor() {
    this.associado = new Associado();
    this.associado.nome='junior';
  
   }

  ngOnInit(): void {
  }

  clicar(){
    console.log(this.associado.nome);
    
  }

}
