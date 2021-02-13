import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Associado } from './associado/associado';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  constructor( private http: HttpClient) { }

  getAssociado() : Associado {
    let associado: Associado = new Associado();
    associado.nome = 'Luiz'

    return associado;

  }
}
