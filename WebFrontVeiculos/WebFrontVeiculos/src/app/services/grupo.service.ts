import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupos';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private ApiUrl = `${environment.ApiUrl}GrupoVeiculo`;

  constructor(private http: HttpClient) { }

  //endpoint para obter todos os veiculos
  getGrupos() : Observable<Grupo[]> {
   return this.http.get<Grupo[]>(this.ApiUrl);
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
