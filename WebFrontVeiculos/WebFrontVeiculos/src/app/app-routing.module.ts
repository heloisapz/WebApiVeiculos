import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosHomeComponent } from './pages/veiculos-home/veiculos-home.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';
//import { PlanosHomeComponent } from './pages/planos-home/planos-home.component';
//import { EmpresasHomeComponent } from './pages/empresas-home/empresas-home.component';
//import { GruposHomeComponent } from './pages/grupos-home/grupos-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'veiculos-home', component: VeiculosHomeComponent },
  { path: 'cadastro-veiculo', component: CadastroVeiculoComponent },
 // { path: 'planos-home', component: PlanosHomeComponent },
 // { path: 'empresas-home', component: EmpresasHomeComponent },
 // { path: 'grupos-home', component: GruposHomeComponent },
 // { path: '', redirectTo: '/veiculos-home', pathMatch: 'full' }, // rota padrão opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
