import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscalaComponent } from './pages/escala/escala.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent as CadastroProfissionalComponent } from './pages/profissionais/cadastro/cadastro.component';
import { ListagemComponent } from './pages/profissionais/listagem/listagem.component';
import { CadastroComponent as CadastroPlantaoComponent } from './pages/plantoes/cadastro/cadastro.component';

const routes: Routes = [{ path: '', component: HomeComponent },
                        { path: 'profissionais/cadastro', component: CadastroProfissionalComponent },
                        { path: 'profissionais/listagem', component: ListagemComponent },
                        { path: 'plantoes', component: CadastroPlantaoComponent },
                        { path: 'escala', component: EscalaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
