import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Grupo } from '../../models/grupos';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-grupos-home',
  standalone: false,
  templateUrl: './grupos-home.component.html',
  styleUrls: ['./grupos-home.component.css'] 
})
export class GruposHomeComponent implements OnInit {
OpenDialog(arg0: number) {
throw new Error('Method not implemented.');
}

  grupos: Grupo[] = [];
  gruposGeral: Grupo[] = [];
  grupoId!: number;

  constructor(private grupoService: GrupoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarGrupos();
  }

  carregarGrupos(): void {
    this.grupoService.getGrupos().subscribe({
      next: (data: Grupo[]) => {
        this.grupos = data;
        this.gruposGeral = data;
      },
      error: (err) => console.error('Erro ao carregar grupos:', err)
    });
  }

  onConfirmDelete(id: number): void {
    this.grupoService.deleteGrupo(id).subscribe({
      next: () => {
        console.log('Veículo excluído com sucesso!');
        this.grupos = this.grupos.filter(grupo => grupo.id !== id);
 
      },
      error: (err) => console.error('Erro ao excluir veículo:', err)
    });
  }

  openDeleteModal(id: number): void {
    this.grupoId = id;
    // Aqui você abriria o diálogo de confirmação, se implementado
    // Exemplo:
    // const dialogRef = this.dialog.open(ExcluirComponent, { data: { id } });
  }
}
