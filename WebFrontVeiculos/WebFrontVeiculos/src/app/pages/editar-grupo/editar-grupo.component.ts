import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../../services/grupo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Grupo } from '../../models/grupos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-grupo',
  standalone: false,
  templateUrl: './editar-grupo.component.html',
  styleUrls: ['./editar-grupo.component.css'],
})
export class EditarGrupoComponent implements OnInit {
  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Grupo';
  grupo!: Grupo;
  formularioGrupo!: FormGroup;

  constructor(
    private grupoService: GrupoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inicializarFormulario();

    this.grupoService.getGrupoById(id).subscribe({
      next: (data) => {
        this.grupo = data;
        this.formularioGrupo.patchValue(this.grupo);
      },
      error: (err) => {
        console.error('Erro ao buscar grupo:', err);
      }
    });
  }

  inicializarFormulario(): void {
    this.formularioGrupo = this.fb.group({
      id: [0],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.formularioGrupo.valid) {
      const grupoAtualizado: Grupo = {
        ...this.grupo,
        ...this.formularioGrupo.value
      };

      this.grupoService.updateGrupo(grupoAtualizado.id!, grupoAtualizado).subscribe({
        next: () => this.router.navigate(['/grupos-home']),
        error: (err) => console.error('Erro ao atualizar grupo:', err),
      });
    }
  }
}
