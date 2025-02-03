import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TipoComercio } from '../../../domain/tipoComercio';
import { TipoComercioService } from '../../../services/tipoComercio.service';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CadastrarTiposComerciosComponent } from "../cadastrar-tipos-comercios/cadastrar-tipos-comercios.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'listar-tipos-comercios',
  standalone: true,
  imports: [ToastModule, TableModule, ButtonModule, CadastrarTiposComerciosComponent, CommonModule],
  providers: [TipoComercioService, MessageService],
  templateUrl: './listar-tipos-comercios.component.html',
})
export class ListarTiposComerciosComponent {
  listaTipoComercio!: TipoComercio[];
  tipoComercioSelecionado: TipoComercio = new TipoComercio();
  mostraJanelaCadastro: boolean = false;

  constructor(private service: TipoComercioService, private messageService: MessageService) {}

  ngOnInit() {
      this.pesquisarTipoComercio();
  }

  private pesquisarTipoComercio(): void {
      this.service.pesquisarTipoComercio().subscribe({
          next: (retorno): void => {
              this.listaTipoComercio = retorno;
          },
          error: (retorno): void => {
              console.log(retorno);
          }
      });
  }

  public abreJanelaParaCadastrarNovoTipoComercio() {
      this.tipoComercioSelecionado = new TipoComercio();
      this.mostraJanelaCadastro = true;
  }

  public abreJanelaParaAlterarTipoComercio(tipoComercio: TipoComercio): void {

      this.tipoComercioSelecionado = new TipoComercio();
      this.tipoComercioSelecionado.id = tipoComercio.id;
      this.tipoComercioSelecionado.nome = tipoComercio.nome;
      this.tipoComercioSelecionado.descricao = tipoComercio.descricao;

      // Exibe a janela de cadastro
      this.mostraJanelaCadastro = true;
  }

  public excluir(tipoComercio: TipoComercio) {
      this.service.excluir(tipoComercio).subscribe({
          next: (retorno): void => {
              this.messageService.add({ severity: 'success', summary: 'Info', detail: `Tipo comércio '${tipoComercio.nome}' excluído com sucesso!` });
              setTimeout(() => this.pesquisarTipoComercio(), 100);
          },
          error: (retorno): void => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Erro: ${retorno.message}` });
            console.log(retorno);
          }
      });
  }

  public fechaJanelaCadastro(salvou: boolean): void {
      this.mostraJanelaCadastro = false;

      if(salvou) {
         setTimeout(() => this.pesquisarTipoComercio(), 100);
      }
  }
}
