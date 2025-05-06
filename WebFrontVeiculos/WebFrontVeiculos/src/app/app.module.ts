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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeiculosHomeComponent,
    CadastroVeiculoComponent,
    EditarVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormVeiculosComponent
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
