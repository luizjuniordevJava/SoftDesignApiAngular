import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Pauta } from './pauta/pauta';

@Injectable({
  providedIn: 'root'
})
export class PautaService {

  apiURL: string = environment.apiURLBase + '/api/pautas';

  constructor(private http: HttpClient) { }

  salvar( pauta: Pauta) : Observable<Pauta>{
    return this.http.post<Pauta>(`${this.apiURL}`, pauta);
  }

  atualizar( pauta: Pauta) : Observable<any>{
    return this.http.put<Pauta>(`${this.apiURL}/${pauta.id}`, pauta);
  }

  getPauta() : Observable<Pauta[]>{
    return this.http.get<Pauta[]>(this.apiURL);
  }

  getPautaById(id: number) : Observable<Pauta>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(pauta: Pauta) : Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${pauta.id}`);
  }
}
