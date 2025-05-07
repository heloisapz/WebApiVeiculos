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

  getGrupos() : Observable<Grupo[]> {
   return this.http.get<Grupo[]>(this.ApiUrl);
  }

  getGrupoById(id: number) : Observable<Grupo> {
    return this.http.get<Grupo>(`${this.ApiUrl}/${id}`);
  } 

  createGrupo(grupo: Grupo) : Observable<Grupo[]> {
    return this.http.post<Grupo[]>(this.ApiUrl, grupo);
  }

  updateGrupo(id: number, grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(`${this.ApiUrl}/${id}`, grupo);
  }

  deleteGrupo(id: number): Observable<Grupo[]>{
    return this.http.delete<Grupo[]>(`${this.ApiUrl}/${id}`);}
 

}
