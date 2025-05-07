import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VeiculosHomeComponent } from './pages/veiculos-home/veiculos-home.component';
import { CadastroVeiculoComponent } from './pages/cadastro-veiculo/cadastro-veiculo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormVeiculosComponent } from "./components/form-veiculos/form-veiculos.component";
import { EditarVeiculoComponent } from './pages/editar-veiculo/editar-veiculo.component';
import { ExcluirComponent } from './components/excluir/excluir.component';
import { GruposHomeComponent } from './pages/grupos-home/grupos-home.component';
import { FormGruposComponent } from './components/form-grupos/form-grupos.component';
import { CadastroGrupoComponent } from './pages/cadastro-grupo/cadastro-grupo.component';
import { EditarGrupoComponent } from './pages/editar-grupo/editar-grupo.component';
import { EmpresasHomeComponent } from './pages/empresas-home/empresas-home.component';
import { FormEmpresasComponent } from './components/form-empresas/form-empresas.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';
import { EditarEmpresaComponent } from './pages/editar-empresa/editar-empresa.component';
import { PlanosHomeComponent } from './pages/planos-home/planos-home.component';
import { FormPlanosComponent } from './components/form-planos/form-planos.component';
import { CadastroPlanoComponent } from './pages/cadastro-plano/cadastro-plano.component';
import { EditarPlanoComponent } from './pages/editar-plano/editar-plano.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeiculosHomeComponent,
    CadastroVeiculoComponent,
    EditarVeiculoComponent,
    ExcluirComponent,
    GruposHomeComponent,
    CadastroGrupoComponent,
    EditarGrupoComponent,
    EmpresasHomeComponent,
    CadastroEmpresaComponent,
    EditarEmpresaComponent,
    PlanosHomeComponent,
    CadastroPlanoComponent,
    EditarPlanoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormVeiculosComponent,
    FormGruposComponent,
    FormEmpresasComponent,
    FormPlanosComponent,
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
