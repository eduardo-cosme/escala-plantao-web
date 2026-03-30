import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Profissional } from '../models/profissional/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  private apiUrl = 'http://localhost:8080/api/profissionais';
  
  constructor(private http: HttpClient) { }

  salvar(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.apiUrl, profissional);
  }

  listar(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.apiUrl);
  }

  listarPorCategoria(categoriaId: number): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${this.apiUrl}/categoria/${categoriaId}`);
  }

}
