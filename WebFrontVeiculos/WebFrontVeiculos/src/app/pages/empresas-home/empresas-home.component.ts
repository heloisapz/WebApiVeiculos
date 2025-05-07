import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { Empresa } from '../../models/empresas';
import { MatDialog } from '@angular/material/dialog';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresas-home',
  standalone: false,
  templateUrl: './empresas-home.component.html',
  styleUrls: ['./empresas-home.component.css'] 
})
export class EmpresasHomeComponent implements OnInit {
OpenDialog(arg0: number) {
throw new Error('Method not implemented.');
}

  empresas: Empresa[] = [];
  empresasGeral: Empresa[] = [];
  empresaId!: number;

  constructor(private empresaService: EmpresaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarEmpresas();
  }

  carregarEmpresas(): void {
    this.empresaService.getEmpresas().subscribe({
      next: (data: Empresa[]) => {
        this.empresas = data;
        this.empresasGeral = data;
      },
      error: (err) => console.error('Erro ao carregar empresas:', err)
    });
  }

  onConfirmDelete(id: number): void {
    this.empresaService.deleteEmpresa(id).subscribe({
      next: () => {
        console.log('Empresa excluída com sucesso!');
        this.empresas = this.empresas.filter(empresa => empresa.id !== id);
 
      },
      error: (err) => console.error('Erro ao excluir empresa:', err)
    });
  }

  openDeleteModal(id: number): void {
    this.empresaId = id;
    // Aqui você abriria o diálogo de confirmação, se implementado
    // Exemplo:
    // const dialogRef = this.dialog.open(ExcluirComponent, { data: { id } });
  }
}
