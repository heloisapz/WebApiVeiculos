import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assistencia } from '../../models/assistencias';
import { AssistenciaService } from '../../services/assistencia.service';
 
@Component({
  selector: 'app-editar-assistencias',
  standalone: false,
  templateUrl: './editar-assistencias.component.html',
  styleUrl: './editar-assistencias.component.css'
})
export class EditarAssistenciasComponent {
 
  btnAcao = "Editar";
  btnTitulo = "Editar Assistência";
  assistencia!: Assistencia;  // Variável que será preenchida após a resposta da API
  formularioAssistencias!: FormGroup;  // Declarando o formulário
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private assistenciaService: AssistenciaService
  ) {}
 
  ngOnInit(): void {
    // Recuperando o id da rota para buscar o grupo
    const assistenciaId = Number(this.route.snapshot.paramMap.get('id'));
    this.inicializarFormulario();
 
    // Buscando o veículo pelo id
    this.assistenciaService.getAssistenciaById(assistenciaId).subscribe({
      next: (dados) => {
        this.assistencia = dados;  // Atribuindo os dados do veículo
        this.formularioAssistencias.patchValue(dados);  // Preenchendo o formulário com os dados
      },
      error: (err) => console.error('Erro ao buscar a assistência:', err)
    });
  }
 
  inicializarFormulario(): void {
    this.formularioAssistencias = this.fb.group({
      id: [0],
      veiculoId: ['', Validators.required],
      planoId: ['', Validators.required],
    });
  }
 
  submit(): void {
    if (this.formularioAssistencias.valid) {
      if (!this.assistenciaService) {
        console.error("Assistência não carregada.");
        return;  
      }
 
      this.assistenciaService.updateAssistencia(this.assistencia.id!, this.formularioAssistencias.value).subscribe({
        next: () => this.router.navigate(['/assistencias-home']),
        error: (err) => console.error('Erro ao atualizar assistência:', err)
      });
    }
  }
 
 
}
 