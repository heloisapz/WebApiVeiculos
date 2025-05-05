import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../../models/veiculos';
import { VeiculoService } from '../../services/veiculo.service';
import { Grupo } from '../../models/grupos';
import { GrupoService } from '../../services/grupo.service';
import { Empresa } from '../../models/empresas';
import { EmpresaService } from '../../services/empresa.service';
import { Plano } from '../../models/planos';
import { PlanoService } from '../../services/plano.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

veiculos: Veiculo[] = [];
veiculosGeral: Veiculo[] = [];

grupos: Grupo[] = [];
gruposGeral: Grupo[] = [];

empresas: Empresa[] = [];
empresasGeral: Empresa[] = [];

planos: Plano[] = [];
planosGeral: Plano[] = [];

constructor(private veiculoService : VeiculoService, private grupoService : GrupoService,
private empresaService : EmpresaService, private planoService : PlanoService
) { }


ngOnInit(): void {
  this.veiculoService.getVeiculos().subscribe((data: Veiculo[]) => {
    this.veiculos = data;
    this.veiculosGeral = data;
    console.log(data);
})

this.grupoService.getGrupos().subscribe((data: Grupo[]) => {
  this.grupos = data;
  this.gruposGeral = data;
  console.log(data);
})

this.empresaService.getEmpresas().subscribe((data: Empresa[]) => {
  this.empresas = data;
  this.empresasGeral = data;
  console.log(data);
})

this.planoService.getPlanos().subscribe((data: Plano[]) => {
  this.planos = data;
  this.planosGeral = data;
  console.log(data);
})
}}
