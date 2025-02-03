import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TipoComercio } from '../../../domain/tipoComercio';
import { TipoComercioService } from '../../../services/tipoComercio.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'cadastrar-tipos-comercios',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule, InputTextModule],
  templateUrl: './cadastrar-tipos-comercios.component.html',
})
export class CadastrarTiposComerciosComponent {
@Input() public tipoComercio: TipoComercio = new TipoComercio();

  @Output('onClose') private eventoFechaJanela = new EventEmitter<boolean>();

  headerComponent: string = "Cadastrar Tipo de Comércio";

  constructor(private service: TipoComercioService, private messageService: MessageService) {}

ngOnInit(){
  if (this.tipoComercio.id) {
    this.headerComponent = "Alterar Tipo de Comércio";
  }
}

  public salvar(): void {

    if (this.tipoComercio.id){
      this.service.alterar(this.tipoComercio).subscribe({
        next: (result): void => {
          this.messageService.add({ severity: 'success', summary: 'Info', detail: `Tipo de Comércio '${this.tipoComercio.nome}' alterado com sucesso!` });
        },
        error: (error): void => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Tipo de Comércio '${this.tipoComercio.nome}' não foi alterado!` });
        },
        complete: (): void => {
          this.cancelar();
          this.reloadPage();
        }
      });
    }
    else{        
      this.service.salvar(this.tipoComercio).subscribe({
        next: (result): void => {
          this.messageService.add({ severity: 'success', summary: 'Info', detail: `Tipo de Comércio '${this.tipoComercio.nome}' cadastrado com sucesso!` });
        },
        error: (error): void => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Tipo de Comércio '${this.tipoComercio.nome}' não foi salvo!` });
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
