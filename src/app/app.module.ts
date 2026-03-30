import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastroComponent as CadastroProfissionalComponent } from './pages/profissionais/cadastro/cadastro.component';
import { ListagemComponent } from './pages/profissionais/listagem/listagem.component';
import { CadastroComponent as CadastroPlantaoComponent } from './pages/plantoes/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EscalaComponent } from './pages/escala/escala.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroProfissionalComponent,
    CadastroPlantaoComponent,
    ListagemComponent,
    EscalaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
