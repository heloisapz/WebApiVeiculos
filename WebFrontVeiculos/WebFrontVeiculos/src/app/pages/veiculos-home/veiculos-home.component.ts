import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculos';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-veiculos-home',
  standalone: false,
  templateUrl: './veiculos-home.component.html',
  styleUrl: './veiculos-home.component.css'
})
export class VeiculosHomeComponent implements OnInit{
  
  veiculos: Veiculo[] = []; // Array de veículos  
  veiculosGeral: Veiculo[] = []; // Array de veículos geral, para uso posterior

  constructor(private veiculoService : VeiculoService, public dialog: MatDialog) { } 
  
  ngOnInit(): void {
    this.veiculoService.getVeiculos().subscribe((data: Veiculo[]) => {
      this.veiculos = data;
      this.veiculosGeral = data;
  });
}
}
