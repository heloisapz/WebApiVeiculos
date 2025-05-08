import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assistencia } from '../models/assistencias';

@Injectable({
  providedIn: 'root'
})
export class AssistenciaService {

  private ApiUrl = `${environment.ApiUrl}VeiculoAssistencia`;

  constructor(private http: HttpClient) { }

  getAssistencias() : Observable<Assistencia[]> {
   return this.http.get<Assistencia[]>(this.ApiUrl);
  }

  getAssistenciaById(id: number) : Observable<Assistencia> {
    return this.http.get<Assistencia>(`${this.ApiUrl}/${id}`);
  } 

  createAssistencia(assistencias: Assistencia) : Observable<Assistencia[]> {
    return this.http.post<Assistencia[]>(this.ApiUrl, assistencias);
  }

  updateAssistencia(id: number, assistencias: Assistencia): Observable<Assistencia> {
    return this.http.put<Assistencia>(`${this.ApiUrl}/${id}`, assistencias);
  }

  deleteAssistencia(id: number): Observable<Assistencia[]>{
    return this.http.delete<Assistencia[]>(`${this.ApiUrl}/${id}`);}
 

}
