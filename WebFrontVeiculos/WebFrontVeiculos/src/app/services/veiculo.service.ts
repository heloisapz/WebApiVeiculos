import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculos';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private ApiUrl = `${environment.ApiUrl}Veiculo`;

  constructor(private http: HttpClient) { }

  //endpoint para obter todos os veiculos
  getVeiculos() : Observable<Veiculo[]> {
   return this.http.get<Veiculo[]>(this.ApiUrl);
  }

  getVeiculoById(id: number) : Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.ApiUrl}/${id}`);
  } 

  // //endpoint para criar veiculo
  createVeiculo(veiculo: Veiculo) : Observable<Veiculo[]> {
    return this.http.post<Veiculo[]>(this.ApiUrl, veiculo);
  }

  updateVeiculo(id: number, veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(`${this.ApiUrl}/${id}`, veiculo);
  }

  deleteVeiculo(id: number): Observable<Veiculo[]>{
    return this.http.delete<Veiculo[]>(`${this.ApiUrl}/${id}`);}
 

}
