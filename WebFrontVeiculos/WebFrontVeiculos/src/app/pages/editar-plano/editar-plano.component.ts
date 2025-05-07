import { Component, OnInit } from '@angular/core';
import { PlanoService } from '../../services/plano.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plano } from '../../models/planos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-plano',
  standalone: false,
  templateUrl: './editar-plano.component.html',
  styleUrls: ['./editar-plano.component.css'],
})
export class EditarPlanoComponent implements OnInit {
  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Plano';
  plano!: Plano;
  formularioPlano!: FormGroup;

  constructor(
    private planoService: PlanoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inicializarFormulario();

    this.planoService.getPlanoById(id).subscribe({
      next: (data) => {
        this.plano = data;
        this.formularioPlano.patchValue(this.plano);
      },
      error: (err) => {
        console.error('Erro ao buscar plano:', err);
      }
    });
  }

  inicializarFormulario(): void {
    this.formularioPlano = this.fb.group({
      id: [0],
      descricao: ['', Validators.required],
      cobertura: ['', Validators.required],
      empresaId: [0, Validators.required],
    });
  }

  submit(): void {
    if (this.formularioPlano.valid) {
      const veiculoAtualizado: Plano = {
        ...this.plano,
        ...this.formularioPlano.value
      };

      this.planoService.updatePlano(veiculoAtualizado.id!, veiculoAtualizado).subscribe({
        next: () => this.router.navigate(['/planos-home']),
        error: (err) => console.error('Erro ao atualizar plano:', err),
      });
    }
  }
}
