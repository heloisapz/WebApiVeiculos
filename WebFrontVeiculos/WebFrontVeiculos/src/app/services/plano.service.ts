import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Plano } from '../models/planos';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PlanoService {
 
  private url = `${environment.ApiUrl}PlanoAssistencia`
 
  constructor(private http: HttpClient) {
 
   }
 
   getPlanos() : Observable<Plano[]>{
    return this.http.get<Plano[]>(this.url);
  }
 
  createPlano(plano: Plano): Observable<Plano[]> {
    return this.http.post<Plano[]>(`${this.url}`, plano);
  }
 
    getPlanoById(id: number) : Observable<Plano> {
      return this.http.get<Plano>(`${this.url}/${id}`);
    }
 
    updatePlano(id: number, plano: Plano): Observable<Plano> {
      return this.http.put<Plano>(`${this.url}/${id}`, plano);
    }
 
    deletePlano(id: number): Observable<Plano[]> {
      return this.http.delete<Plano[]>(`${this.url}/${id}`);
    }
}