import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cidade } from '../../../domain/cidade';
import { CidadeService } from '../../../services/cidade.service';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CadastrarCidadesComponent } from "../cadastrar-cidades/cadastrar-cidades.component";
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'listar-cidades',
  standalone: true,
  imports: [ToastModule, TableModule, ButtonModule, CadastrarCidadesComponent, CommonModule],
  providers: [CidadeService, MessageService],
  templateUrl: './listar-cidades.component.html',
})
export class ListarCidadesComponent {
  listaCidades!: Cidade[];
  cidadeSelecionada: Cidade = new Cidade();
  mostraJanelaCadastro: boolean = false;

  constructor(private service: CidadeService, private messageService: MessageService) {}

  ngOnInit() {
      this.pesquisarCidades();
  }

  private pesquisarCidades(): void {
      this.service.pesquisarCidades().subscribe({
          next: (retorno): void => {
              this.listaCidades = retorno;
          },
          error: (retorno): void => {
              console.log(retorno);
          }
      });
  }

  public abreJanelaParaCadastrarNovaCidade() {
      this.cidadeSelecionada = new Cidade();
      this.mostraJanelaCadastro = true;
  }

  public abreJanelaParaAlterarCidade(cidade: Cidade): void {
      // Copia os dados da cidade selecionada para uma nova cidade
      this.cidadeSelecionada = new Cidade();
      this.cidadeSelecionada.id = cidade.id;
      this.cidadeSelecionada.nome = cidade.nome;
      this.cidadeSelecionada.uf = cidade.uf;
      this.cidadeSelecionada.capital = cidade.capital;

      // Exibe a janela de cadastro
      this.mostraJanelaCadastro = true;
  }

  public excluir(cidade: Cidade) {
      this.service.excluir(cidade).subscribe({
          next: (retorno): void => {
              this.messageService.add({ severity: 'success', summary: 'Info', detail: `Cidade '${cidade.nome}' excluída com sucesso!` });
              setTimeout(() => this.pesquisarCidades(), 100);
          },
          error: (retorno): void => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Erro: ${retorno.message}` });
          }
      });
  }

  public fechaJanelaCadastro(salvou: boolean): void {
      // Esconde a janela de cadastro
      this.mostraJanelaCadastro = false;

      // Se salvou, atualiza a lista de cidades
      if(salvou) {
         setTimeout(() => this.pesquisarCidades(), 100);
      }
  }
}
