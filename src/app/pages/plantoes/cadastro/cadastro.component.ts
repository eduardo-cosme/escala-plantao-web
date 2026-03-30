import { Component, OnInit } from '@angular/core';
import { PlantaoService } from 'src/app/services/plantao.service';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-cadastro-plantao',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  plantao = {
    profissionalId: 0,
    turnoId: 1,
    data: ''
  };
    profissionais: any[] = [];

    constructor(
    private plantaoService: PlantaoService,
    private profissionalService: ProfissionalService
  ) {}

  ngOnInit(): void {
      this.carregarProfissionais();
  }

  carregarProfissionais() {
    this.profissionalService.listar().subscribe({
      next: (data) => this.profissionais = data,
      error: () => alert('Erro ao carregar profissionais')
    });
  }

  salvar() {
    this.plantaoService.criar(this.plantao).subscribe({
      next: () => {
        alert('Plantão criado com sucesso!');
        this.limpar();
      },
      error: (err) => {
        alert(err.error?.message || 'Erro ao criar plantão');
      }
    });
  }  

  limpar() {
    this.plantao = {
      profissionalId: 0,
      turnoId: 1,
      data: ''
    };
  }  

}
