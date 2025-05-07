import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Grupo } from '../../models/grupos';
import { GrupoService } from '../../services/grupo.service';

@Component({
  selector: 'app-form-grupos',
  templateUrl: './form-grupos.component.html',
  styleUrls: ['./form-grupos.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormGruposComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Grupo>();
  @Input() btnAcao: string = 'Salvar';
  @Input() btnTitulo: string = 'Formulário de Grupo';
  @Input() dadosGrupo: Grupo | null = null;

  formularioGrupo!: FormGroup;

  constructor(private grupoService: GrupoService) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.formularioGrupo = new FormGroup({
      id: new FormControl(this.dadosGrupo?.id ?? 0),
      nome: new FormControl(this.dadosGrupo?.nome ?? '', Validators.required),
      descricao: new FormControl(this.dadosGrupo?.descricao ?? '', Validators.required),
    });
  }

  submit(): void {
    if (this.formularioGrupo.valid) {
      this.onSubmit.emit(this.formularioGrupo.value);
    } else {
      this.formularioGrupo.markAllAsTouched();
    }
  }
}
