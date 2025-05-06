import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculos';

@Component({
  selector: 'app-cadastro-veiculo',
  standalone: false,
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent {

  btnAcao = "Cadastrar";

  btnTitulo = "Cadastrar Veículo";
 
constructor(private veiculoService: VeiculoService, private router: Router) {
 
}

createVeiculo(veiculo: Veiculo)

{

  console.log(veiculo);

  this.veiculoService.createVeiculo(veiculo).subscribe((data) => { 

    this.router.navigate(['/veiculos-home']);
 
});

}
}

 
