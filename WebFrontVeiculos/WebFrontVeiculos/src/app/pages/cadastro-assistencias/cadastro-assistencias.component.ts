import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssistenciaService } from '../../services/assistencia.service';
import { Assistencia } from '../../models/assistencias';

@Component({
  selector: 'app-cadastro-assistencias',
  standalone: false,
  templateUrl: './cadastro-assistencias.component.html',
  styleUrl: './cadastro-assistencias.component.css'
})
export class CadastroAssistenciaComponent {

  btnAcao = "Cadastrar";

  btnTitulo = "Cadastrar Assistência";
 
constructor(private assistenciaService: AssistenciaService, private router: Router) {
 
}

createAssistencia(empresa: Assistencia)

{

  this.assistenciaService.createAssistencia(empresa).subscribe((data) => { 

    this.router.navigate(['/asssistencias-home']);
 
});

}
}

 
