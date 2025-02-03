import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comercio } from '../../../domain/comercio';
import { ComercioService } from '../../../services/comercio.service';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CadastrarComerciosComponent } from "../cadastrar-comercios/cadastrar-comercios.component";
import { CommonModule } from '@angular/common'; 
import { TipoComercioService } from '../../../services/tipoComercio.service';
import { CidadeService } from '../../../services/cidade.service';
import { Cidade } from '../../../domain/cidade';
import { TipoComercio } from '../../../domain/tipoComercio';

@Component({
  selector: 'listar-comercios',
  standalone: true,
  imports: [ToastModule, TableModule, ButtonModule, CadastrarComerciosComponent, CommonModule],
  providers: [ComercioService, MessageService, TipoComercioService, CidadeService],
  templateUrl: './listar-comercios.component.html',
})

export class ListarComerciosComponent {
  listaComercio: Comercio[] = [];
  comercioSelecionado: Comercio = new Comercio();
  mostraJanelaCadastro: boolean = false;

  constructor(private service: ComercioService, private messageService: MessageService,
    private tipoComercioService: TipoComercioService, private cidadeService: CidadeService
  ) {}

  ngOnInit() {
      this.pesquisarComercio();
  }

  private pesquisarComercio(): void {
      this.service.pesquisarComercio().subscribe({
          next: (retorno): void => {
              this.listaComercio = retorno;
          },
          error: (retorno): void => {
              console.log(retorno);
          },
          complete: () => {
            let arr: Comercio[] = this.listaComercio;
            if(arr != null && arr != undefined && arr.length > 0)
                this.buscarLabelCidade(arr);
                this.buscarLabelTipoComercio(arr);
          }
      });
  }

  private buscarLabelCidade(listaComercio: Comercio[]){
    let cidades : Cidade[];
    this.cidadeService.pesquisarCidades().subscribe({
        next: (retorno): void => {
            cidades = retorno;
            listaComercio.forEach(element => {
                let cidade = cidades.find(f => f.id == element.idCidadeFk);
                element.labelCidade = cidade?.nome;
            });
        }
    });
  }

  private buscarLabelTipoComercio(listaComercio: Comercio[]){
    let tipoComercios : TipoComercio[];
    this.tipoComercioService.pesquisarTipoComercio().subscribe({
        next: (retorno): void => {
            tipoComercios = retorno;
            listaComercio.forEach(element => {
                let tipoComercio = tipoComercios.find(f => f.id == element.idTipoComercioFk);
                element.labelTipoComercio = tipoComercio?.nome;
            });
        }
    });
  }

  public abreJanelaParaCadastrarNovoComercio() {
      this.comercioSelecionado = new Comercio();
      this.mostraJanelaCadastro = true;
  }

  public abreJanelaParaAlterarComercio(comercio: Comercio): void {

      this.comercioSelecionado = new Comercio();
      this.comercioSelecionado.id = comercio.id;
      this.comercioSelecionado.nome = comercio.nome;
      this.comercioSelecionado.nomeResponsavel = comercio.nomeResponsavel;
      this.comercioSelecionado.idCidadeFk = comercio.idCidadeFk;
      this.comercioSelecionado.idTipoComercioFk = comercio.idTipoComercioFk;

      // Exibe a janela de cadastro
      this.mostraJanelaCadastro = true;
  }

  public excluir(comercio: Comercio) {
      this.service.excluir(comercio).subscribe({
          next: (retorno): void => {
              this.messageService.add({ severity: 'success', summary: 'Info', detail: `Tipo comércio '${comercio.nome}' excluído com sucesso!` });
              setTimeout(() => this.pesquisarComercio(), 100);
          },
          error: (retorno): void => {
              console.log(retorno);
          }
      });
  }

  public fechaJanelaCadastro(salvou: boolean): void {
      this.mostraJanelaCadastro = false;

      if(salvou) {
         setTimeout(() => this.pesquisarComercio(), 100);
      }
  }
}
