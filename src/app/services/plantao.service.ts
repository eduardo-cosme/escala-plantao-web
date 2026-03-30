import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantaoRequest } from '../models/plantao/plantao-request';
import { EscalaResponse } from '../models/escala/escala-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaoService {
   private apiUrl = 'http://localhost:8080/api/plantoes';

  constructor(private http: HttpClient) { }

  criar(plantao: PlantaoRequest): Observable<PlantaoRequest> {
    return this.http.post<PlantaoRequest>(this.apiUrl, plantao);
  }

  excluir(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getEscalaSemana(data: string): Observable<EscalaResponse[]> {
    return this.http.get<EscalaResponse[]>(`${this.apiUrl}/semana?data=${data}`);
  }

}
