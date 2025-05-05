import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private ApiUrl = `${environment.ApiUrl}EmpresaAssistencia`;

  constructor(private http: HttpClient) { }

  //endpoint para obter todos os veiculos
  getEmpresas() : Observable<Empresa[]> {
   return this.http.get<Empresa[]>(this.ApiUrl);
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
