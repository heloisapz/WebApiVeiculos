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

  getEmpresas() : Observable<Empresa[]> {
   return this.http.get<Empresa[]>(this.ApiUrl);
  }

  getEmpresaById(id: number) : Observable<Empresa> {
    return this.http.get<Empresa>(`${this.ApiUrl}/${id}`);
  } 

  createEmpresa(empresa: Empresa) : Observable<Empresa[]> {
    return this.http.post<Empresa[]>(this.ApiUrl, empresa);
  }

  updateEmpresa(id: number, empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.ApiUrl}/${id}`, empresa);
  }

  deleteEmpresa(id: number): Observable<Empresa[]>{
    return this.http.delete<Empresa[]>(`${this.ApiUrl}/${id}`);}
 

}
