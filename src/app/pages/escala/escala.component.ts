import { Component } from '@angular/core';
import { EscalaResponse } from 'src/app/models/escala/escala-response';
import { PlantaoService } from 'src/app/services/plantao.service';

@Component({
  selector: 'app-escala',
  templateUrl: './escala.component.html',
  styleUrls: ['./escala.component.css']
})
export class EscalaComponent {

  dataInicial: string = '';
  escala: any[] = [];

   constructor(private plantaoService: PlantaoService) {}

     buscarEscala() {
    if (!this.dataInicial) return;

    this.plantaoService.getEscalaSemana(this.dataInicial)
      .subscribe({
        next: (data) => {
          console.log('Dados retornados do back-end:', data);
          console.log('Primeiro item:', data[0]);
          this.escala = data;
        },
        error: (err) => console.error(err)
      });
  }

  excluir(id: number) {
    if (!confirm('Deseja realmente excluir este plantão?')) {
      return;
    }

    this.plantaoService.excluir(id).subscribe({
      next: () => {
        alert('Plantão excluído com sucesso!');
        // Remove o plantão da lista sem precisar recarregar
        this.escala = this.escala.filter(p => p.id !== id);
      },
      error: (err) => {
        console.error('Erro ao excluir:', err);
        alert('Erro ao excluir plantão');
      }
    });
  }

  // Calcula horas do turno
  getHorasTurno(turnoDescricao: string): number {
    const descricao = turnoDescricao?.toLowerCase() || '';
    if (descricao.includes('noturno') || descricao.includes('noite')) {
      return 12;
    }
    return 6; // manhã ou tarde
  }

  // Calcula total de horas trabalhadas pelo profissional na semana
  calcularHorasProfissional(profissionalId: number): number {
    return this.escala
      .filter(p => p.profissional?.id === profissionalId)
      .reduce((total, p) => total + this.getHorasTurno(p.turno?.descricao), 0);
  }

  // Verifica se o profissional atingiu o limite de horas
  atingiuLimite(plantao: any): boolean {
    if (!plantao.profissional?.id || !plantao.profissional?.cargaHorariaSemanal) {
      return false;
    }
    const horasTrabalhadas = this.calcularHorasProfissional(plantao.profissional.id);
    return horasTrabalhadas >= plantao.profissional.cargaHorariaSemanal;
  }

}
