import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Associado } from './associado/associado';
import { Observable } from 'rxjs';

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

  salvar( associado: Associado) : Observable<Associado>{
    return this.http.post<Associado>('http://localhost:8080/api/associados', associado);
  }
}
