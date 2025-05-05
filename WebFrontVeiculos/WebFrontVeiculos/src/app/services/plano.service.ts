import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plano } from '../models/planos';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  private ApiUrl = `${environment.ApiUrl}PlanoAssistencia`;

  constructor(private http: HttpClient) { }

  //endpoint para obter todos os veiculos
  getPlanos() : Observable<Plano[]> {
   return this.http.get<Plano[]>(this.ApiUrl);
  }

  //endpoint para obter veiculo por id
  // getVeiculo(id: number) : Observable<Veiculo> {
  //   return this.http.get<Veiculo>(`${this.ApiUrl}/${id}`);
  // } 

  // //endpoint para criar veiculo
  // createVeiculo(veiculo: Veiculo) : Observable<Veiculo> {
  //   return this.http.post<Veiculo>(this.ApiUrl, veiculo);
  // }
}
