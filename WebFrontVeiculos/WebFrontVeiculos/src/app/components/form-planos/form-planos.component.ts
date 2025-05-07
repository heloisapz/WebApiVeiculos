import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Plano } from '../../models/planos';
import { PlanoService } from '../../services/plano.service';

@Component({
  selector: 'app-form-planos',
  templateUrl: './form-planos.component.html',
  styleUrls: ['./form-planos.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormPlanosComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Plano>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosPlanos: Plano | null = null;

  formularioPlano!: FormGroup;

  constructor(private planoService: PlanoService) {}

  ngOnInit(): void {
    this.formularioPlano = new FormGroup({
      id: new FormControl(this.dadosPlanos?.id ?? 0),
      descricao: new FormControl(this.dadosPlanos?.descricao ?? '', Validators.required),
      cobertura: new FormControl(this.dadosPlanos?.cobertura ?? '', Validators.required),
      empresaId: new FormControl(this.dadosPlanos?.empresaId ?? '', Validators.required),
    });
  }

  submit(): void {
    if (this.formularioPlano.valid) {
      const planoFormValue = this.formularioPlano.value;

      const plano: Plano = {
        ...planoFormValue,
        empresaId: Number(planoFormValue.empresaId) // 🔧 conversão para número
      };

      this.onSubmit.emit(plano);
    } else {
      this.formularioPlano.markAllAsTouched();
    }
  }
}
