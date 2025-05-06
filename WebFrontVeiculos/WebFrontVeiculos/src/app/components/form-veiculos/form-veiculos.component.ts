import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Veiculo } from '../../models/veiculos';
import { VeiculoService } from '../../services/veiculo.service';

@Component({
  selector: 'app-form-veiculos',
  templateUrl: './form-veiculos.component.html',
  styleUrls: ['./form-veiculos.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormVeiculosComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Veiculo>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosVeiculo: Veiculo | null = null;

  formularioVeiculo!: FormGroup;

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.formularioVeiculo = new FormGroup({
      id: new FormControl(this.dadosVeiculo?.id ?? 0),
      placa: new FormControl(this.dadosVeiculo?.placa ?? '', Validators.required),
      modelo: new FormControl(this.dadosVeiculo?.modelo ?? '', Validators.required),
      grupoId: new FormControl(this.dadosVeiculo?.grupoId ?? '', Validators.required),
    });
  }

  submit(): void {
    if (this.formularioVeiculo.valid) {
      const veiculoFormValue = this.formularioVeiculo.value;

      const veiculo: Veiculo = {
        ...veiculoFormValue,
        grupoId: Number(veiculoFormValue.grupoId) // 🔧 conversão para número
      };

      this.onSubmit.emit(veiculo);
    } else {
      this.formularioVeiculo.markAllAsTouched();
    }
  }
}
