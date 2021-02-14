import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pauta } from './pauta/pauta';

@Injectable({
  providedIn: 'root'
})
export class PautaService {

  constructor(private http: HttpClient) { }

  salvar( pauta: Pauta) : Observable<Pauta>{
    return this.http.post<Pauta>('http://localhost:8080/api/pautas', pauta);
  }

  atualizar( pauta: Pauta) : Observable<any>{
    return this.http.put<Pauta>(`http://localhost:8080/api/pautas/${pauta.id}`, pauta);
  }

  getPauta() : Observable<Pauta[]>{
    return this.http.get<Pauta[]>('http://localhost:8080/api/pautas');
  }

  getPautaById(id: number) : Observable<Pauta>{
    return this.http.get<any>(`http://localhost:8080/api/pautas/${id}`);
  }

  deletar(pauta: Pauta) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/pautas/${pauta.id}`);
  }
}
