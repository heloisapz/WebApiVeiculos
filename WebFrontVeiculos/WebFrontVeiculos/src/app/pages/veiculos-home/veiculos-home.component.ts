import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculos';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-veiculos-home',
  standalone: false,
  templateUrl: './veiculos-home.component.html',
  styleUrls: ['./veiculos-home.component.css'] // Correção aqui
})
export class VeiculosHomeComponent implements OnInit {
OpenDialog(arg0: number) {
throw new Error('Method not implemented.');
}

  veiculos: Veiculo[] = [];
  veiculosGeral: Veiculo[] = [];
  veiculoId!: number;

  constructor(private veiculoService: VeiculoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe({
      next: (data: Veiculo[]) => {
        this.veiculos = data;
        this.veiculosGeral = data;
      },
      error: (err) => console.error('Erro ao carregar veículos:', err)
    });
  }

  onConfirmDelete(id: number): void {
    this.veiculoService.deleteVeiculo(id).subscribe({
      next: () => {
        console.log('Veículo excluído com sucesso!');
        this.veiculos = this.veiculos.filter(veiculo => veiculo.id !== id);
 
      },
      error: (err) => console.error('Erro ao excluir veículo:', err)
    });
  }

  openDeleteModal(id: number): void {
    this.veiculoId = id;
    // Aqui você abriria o diálogo de confirmação, se implementado
    // Exemplo:
    // const dialogRef = this.dialog.open(ExcluirComponent, { data: { id } });
  }
}
