import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comercio } from '../../../domain/comercio';
import { ComercioService } from '../../../services/comercio.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { Cidade } from '../../../domain/cidade';
import { CidadeService } from '../../../services/cidade.service';
import { TipoComercioService } from '../../../services/tipoComercio.service';
import { TipoComercio } from '../../../domain/tipoComercio';

@Component({
  selector: 'cadastrar-comercios',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule, InputTextModule, DropdownModule],
  providers: [CidadeService, TipoComercioService, ComercioService],
  templateUrl: './cadastrar-comercios.component.html',
})
export class CadastrarComerciosComponent {
  
  listaCidades: Cidade[] = [];
  listaTipoComercios: TipoComercio[] = [];

@Input() public comercio: Comercio = new Comercio();

  @Output('onClose') private eventoFechaJanela = new EventEmitter<boolean>();

  headerComponent: string = "Cadastrar Comércio";

  constructor(private service: ComercioService, private messageService: MessageService,
     private cidadeService: CidadeService, private tipoComercioService: TipoComercioService) {}

ngOnInit(){
  if (this.comercio.id) {
    this.headerComponent = "Alterar Comércio";
  }

  this.cidadeService.pesquisarCidades().subscribe({
    next: (retorno): void => {
      this.listaCidades = retorno;
  },
  error: (retorno): void => {
      console.log(retorno);
  }
  });

  this.tipoComercioService.pesquisarTipoComercio().subscribe({
    next: (retorno): void => {
      this.listaTipoComercios = retorno;
  },
  error: (retorno): void => {
      console.log(retorno);
  }
  });

}

  public salvar(): void {

    if (this.comercio.id){
      this.service.alterar(this.comercio).subscribe({
        next: (result): void => {
          this.messageService.add({ severity: 'success', summary: 'Info', detail: `Comércio '${this.comercio.nome}' alterado com sucesso!` });
        },
        error: (error): void => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Comércio '${this.comercio.nome}' não foi alterado!` });
        },
        complete: (): void => {
          this.cancelar();
          this.reloadPage();
        }
      });
    }
    else{        
      this.service.salvar(this.comercio).subscribe({
        next: (result): void => {
          this.messageService.add({ severity: 'success', summary: 'Info', detail: `Comércio '${this.comercio.nome}' cadastrado com sucesso!` });
        },
        error: (error): void => {
          console.log(error);
          console.log(this.comercio);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Comércio '${this.comercio.nome}' não foi salvo!` });
        },
        complete: (): void => {
          this.cancelar();
          this.reloadPage();
        }
      });
    }
  }

  public cancelar(): void {
      this.eventoFechaJanela.emit(false) ;
  }

  public reloadPage(): void {
    setTimeout(() => window.location.reload(), 100);
  }
}
