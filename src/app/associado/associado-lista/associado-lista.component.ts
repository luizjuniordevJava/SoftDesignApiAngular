import { Component, OnInit } from '@angular/core';
import { AssociadoService } from '../../associado.service';
import { Associado } from '../associado';

@Component({
  selector: 'app-associado-lista',
  templateUrl: './associado-lista.component.html',
  styleUrls: ['./associado-lista.component.css']
})
export class AssociadoListaComponent implements OnInit {

  associados: Associado[] = [];

  constructor( private service: AssociadoService ) { }

  ngOnInit(): void {
    this.service 
          .getAssociado()
          .subscribe( response => this.associados = response);
  }

}
