import { Component, OnInit } from '@angular/core';
import { PlanoService } from '../../services/plano.service';
import { Plano } from '../../models/planos';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-planos-home',
  standalone: false,
  templateUrl: './planos-home.component.html',
  styleUrls: ['./planos-home.component.css'] // Correção aqui
})
export class PlanosHomeComponent implements OnInit {
OpenDialog(arg0: number) {
throw new Error('Method not implemented.');
}

  planos: Plano[] = [];
  planosGeral: Plano[] = [];
  planoId!: number;

  constructor(private planoService: PlanoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarPlanos();
  }

  carregarPlanos(): void {
    this.planoService.getPlanos().subscribe({
      next: (data: Plano[]) => {
        this.planos = data;
        this.planos = data;
      },
      error: (err) => console.error('Erro ao carregar planos:', err)
    });
  }

  onConfirmDelete(id: number): void {
    this.planoService.deletePlano(id).subscribe({
      next: () => {
        console.log('Plano excluído com sucesso!');
        this.planos = this.planos.filter(plano => plano.id !== id);
 
      },
      error: (err) => console.error('Erro ao excluir veículo:', err)
    });
  }

  openDeleteModal(id: number): void {
    this.planoId = id;
    // Aqui você abriria o diálogo de confirmação, se implementado
    // Exemplo:
    // const dialogRef = this.dialog.open(ExcluirComponent, { data: { id } });
  }
}
