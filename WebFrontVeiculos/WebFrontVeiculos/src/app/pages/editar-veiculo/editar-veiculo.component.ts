import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../../models/veiculos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-veiculo',
  standalone: false,
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.css'],
})
export class EditarVeiculoComponent implements OnInit {
  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Veículo';
  veiculo!: Veiculo;
  formularioVeiculo!: FormGroup;

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inicializarFormulario();

    this.veiculoService.getVeiculoById(id).subscribe({
      next: (data) => {
        this.veiculo = data;
        this.formularioVeiculo.patchValue(this.veiculo);
      },
      error: (err) => {
        console.error('Erro ao buscar veículo:', err);
      }
    });
  }

  inicializarFormulario(): void {
    this.formularioVeiculo = this.fb.group({
      id: [0],
      placa: ['', Validators.required],
      modelo: ['', Validators.required],
      grupoId: [0, Validators.required],
    });
  }

  submit(): void {
    if (this.formularioVeiculo.valid) {
      const veiculoAtualizado: Veiculo = {
        ...this.veiculo,
        ...this.formularioVeiculo.value
      };

      this.veiculoService.updateVeiculo(veiculoAtualizado.id!, veiculoAtualizado).subscribe({
        next: () => this.router.navigate(['/veiculos-home']),
        error: (err) => console.error('Erro ao atualizar veículo:', err),
      });
    }
  }
}
