import { Component } from '@angular/core';
import { Profissional } from 'src/app/models/profissional/profissional';

import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

    profissional: Profissional = {
    nome: '',
    registro: '',
    categoriaId: 1,
    cargaHorariaSemanal: 40
    };

    constructor(private service: ProfissionalService) {}

      salvar() {
    this.service.salvar(this.profissional).subscribe({
      next: () => {
        alert('Salvo com sucesso!');
        this.limpar();
      },
      //error: () => alert('Erro ao salvar')
        error: (err) => {
      console.error('Erro completo:', err);
      alert(err.error?.message || 'Erro ao salvar');
}
    });
  }

    limpar() {
    this.profissional = {
      nome: '',
      registro: '',
      categoriaId: 1,
      cargaHorariaSemanal: 40
    };
  }
}
