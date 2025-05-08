import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosHomeComponent } from './pages/veiculos-home/veiculos-home.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';
import { EditarVeiculoComponent } from './pages/editar-veiculo/editar-veiculo.component';
import { ExcluirComponent } from './components/excluir/excluir.component';
import { GruposHomeComponent } from './pages/grupos-home/grupos-home.component';
import { CadastroGrupoComponent } from './pages/cadastro-grupo/cadastro-grupo.component';
import { EditarGrupoComponent } from './pages/editar-grupo/editar-grupo.component';
import { EmpresasHomeComponent } from './pages/empresas-home/empresas-home.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { EditarEmpresaComponent } from './pages/editar-empresa/editar-empresa.component';
import { PlanosHomeComponent } from './pages/planos-home/planos-home.component';
import { CadastroPlanoComponent } from './pages/cadastro-plano/cadastro-plano.component';
import { EditarPlanoComponent } from './pages/editar-plano/editar-plano.component';
import { AssistenciasHomeComponent } from './pages/asssistencias-home/asssistencias-home.component';
import { CadastroAssistenciaComponent } from './pages/cadastro-assistencias/cadastro-assistencias.component';
import { EditarAssistenciasComponent } from './pages/editar-assistencias/editar-assistencias.component';
//import { PlanosHomeComponent } from './pages/planos-home/planos-home.component';
//import { EmpresasHomeComponent } from './pages/empresas-home/empresas-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'veiculos-home', component: VeiculosHomeComponent },
  { path: 'cadastro-veiculo', component: CadastroVeiculoComponent },
  { path: 'editar-veiculo/:id', component: EditarVeiculoComponent },
  { path: 'excluir/:id', component: ExcluirComponent },
  { path: 'grupos-home', component: GruposHomeComponent },
  { path: 'cadastro-grupo', component: CadastroGrupoComponent },
  { path: 'editar-grupo/:id', component: EditarGrupoComponent },
  { path: 'empresas-home', component: EmpresasHomeComponent },
  { path: 'cadastro-empresa', component: CadastroEmpresaComponent },
  { path: 'editar-empresa/:id', component: EditarEmpresaComponent },
  { path: 'planos-home', component: PlanosHomeComponent },
  { path: 'cadastro-plano', component: CadastroPlanoComponent },
  { path: 'editar-plano/:id', component: EditarPlanoComponent },
  { path: 'assistencias-home', component: AssistenciasHomeComponent },
  { path: 'cadastro-assistencias', component: CadastroAssistenciaComponent },
  { path: 'editar-assistencias/:id', component: EditarAssistenciasComponent },
 // { path: '', redirectTo: '/veiculos-home', pathMatch: 'full' }, // rota padrão opcional
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
