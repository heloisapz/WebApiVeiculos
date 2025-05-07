import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Empresa } from '../../models/empresas';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-form-empresas',
  templateUrl: './form-empresas.component.html',
  styleUrls: ['./form-empresas.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormEmpresasComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Empresa>();
  @Input() btnAcao: string = 'Salvar';
  @Input() btnTitulo: string = 'Formulário de Empresas';
  @Input() dadosEmpresa: Empresa | null = null;

  formularioEmpresa!: FormGroup;

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.formularioEmpresa = new FormGroup({
      id: new FormControl(this.dadosEmpresa?.id ?? 0),
      nome: new FormControl(this.dadosEmpresa?.nome ?? '', Validators.required),
      endereco: new FormControl(this.dadosEmpresa?.endereco ?? '', Validators.required),
    });
  }

  submit(): void {
    if (this.formularioEmpresa.valid) {
      this.onSubmit.emit(this.formularioEmpresa.value);
    } else {
      this.formularioEmpresa.markAllAsTouched();
    }
  }
}
