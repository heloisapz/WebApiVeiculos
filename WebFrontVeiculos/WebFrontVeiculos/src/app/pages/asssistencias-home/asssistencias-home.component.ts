import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Assistencia } from '../../models/assistencias';
import { MatDialog } from '@angular/material/dialog';
import { AssistenciaService } from '../../services/assistencia.service';

@Component({
  selector: 'app-assistencias-home',
  standalone: false,
  templateUrl: './asssistencias-home.component.html',
  styleUrls: ['./asssistencias-home.component.css'] 
})
export class AssistenciasHomeComponent implements OnInit {
OpenDialog(arg0: number) {
throw new Error('Method not implemented.');
}

  assistencias: Assistencia[] = [];
  assistenciasGeral: Assistencia[] = [];
  assistenciaId!: number;

  constructor(private assistenciaService: AssistenciaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarAssistencias();
  }

  carregarAssistencias(): void {
    this.assistenciaService.getAssistencias().subscribe({
      next: (data: Assistencia[]) => {
        this.assistencias = data;
        this.assistenciasGeral = data;
      },
      error: (err) => console.error('Erro ao carregar assistências:', err)
    });
  }

  onConfirmDelete(id: number): void {
    this.assistenciaService.deleteAssistencia(id).subscribe({
      next: () => {
        console.log('Assistência excluído com sucesso!');
        this.assistencias = this.assistencias.filter(assistencia => assistencia.id !== id);
 
      },
      error: (err) => console.error('Erro ao excluir assistência:', err)
    });
  }

  openDeleteModal(id: number): void {
    this.assistenciaId = id;
    // Aqui você abriria o diálogo de confirmação, se implementado
    // Exemplo:
    // const dialogRef = this.dialog.open(ExcluirComponent, { data: { id } });
  }
}
