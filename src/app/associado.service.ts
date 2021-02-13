import { Injectable } from '@angular/core';
import { Associado } from './associado/associado';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  constructor() { }

  getAssociado() : Associado {
    let associado: Associado = new Associado();
    associado.nome = 'Luiz'

    return associado;

  }
}
