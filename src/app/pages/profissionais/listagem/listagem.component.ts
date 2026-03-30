import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-listagem-profissional',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  profissionais: any[] = [];
  categoriaId?: number;

  constructor(private service: ProfissionalService) {}
  
  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe(data => {
      console.log('Dados retornados do back-end (listar):', data);
      console.log('Primeiro profissional:', data[0]);
      this.profissionais = data;
    });
  }

  filtrar() {
    if (this.categoriaId) {
      this.service.listarPorCategoria(this.categoriaId)
        .subscribe(data => {
          console.log('Dados retornados do back-end (filtrar):', data);
          console.log('Primeiro profissional filtrado:', data[0]);
          this.profissionais = data;
        });
    } else {
      this.listar();
    }
  }

  obterCategoriaNome(categoriaId: number): string {
    const categorias: { [key: number]: string } = {
      1: 'Médico',
      2: 'Enfermeiro',
      3: 'Técnico'
    };
    return categorias[categoriaId] || 'Desconhecida';
  }

}
