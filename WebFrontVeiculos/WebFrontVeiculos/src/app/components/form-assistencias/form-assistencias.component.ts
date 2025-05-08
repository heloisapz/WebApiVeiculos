import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Assistencia } from '../../models/assistencias';
import { AssistenciaService } from '../../services/assistencia.service';

@Component({
  selector: 'app-form-assistencias',
  templateUrl: './form-assistencias.component.html',
  styleUrls: ['./form-assistencias.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormAssistenciasComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Assistencia>();
  @Input() btnAcao: string = 'Salvar';
  @Input() btnTitulo: string = 'Formulário de Assistências';
  @Input() dadosAssistencia: Assistencia | null = null;

  formularioAssistencia!: FormGroup;

  constructor(private assistenciaService: AssistenciaService) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.formularioAssistencia = new FormGroup({
      id: new FormControl(this.dadosAssistencia?.id ?? 0),
      veiculoId: new FormControl(this.dadosAssistencia?.veiculoId ?? '', Validators.required),
      planoId: new FormControl(this.dadosAssistencia?.planoId ?? '', Validators.required),
    });
  }

  submit(): void {
    if (this.formularioAssistencia.valid) {
      this.onSubmit.emit(this.formularioAssistencia.value);
    } else {
      this.formularioAssistencia.markAllAsTouched();
    }
  }
}
