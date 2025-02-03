import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cidade } from '../../../domain/cidade';
import { CidadeService } from '../../../services/cidade.service';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'cadastrar-cidades',
  standalone: true,
  imports: [DialogModule, RadioButtonModule, ButtonModule, FormsModule, InputTextModule],
  templateUrl: './cadastrar-cidades.component.html',
})
export class CadastrarCidadesComponent {
  @Input() public cidade: Cidade = new Cidade();

  @Output('onClose') private eventoFechaJanela = new EventEmitter<boolean>();

  headerComponent: string = "Cadastrar Cidade";

  constructor(private service: CidadeService, private messageService: MessageService) {}

ngOnInit(){
  if (this.cidade.id) {
    this.headerComponent = "Alterar Cidade";
  }
}

  public salvar(): void {

    if (this.cidade.id){
      this.service.alterar(this.cidade).subscribe({
        next: (result): void => {
          this.messageService.add({ severity: 'success', summary: 'Info', detail: `Cidade '${this.cidade.nome}' alterada com sucesso!` });
        },
        error: (error): void => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Cidade '${this.cidade.nome}' não foi alterada!` });
        },
        complete: (): void => {
          this.cancelar();
          this.reloadPage();
        }
      });
    }
    else{        
      this.service.salvar(this.cidade).subscribe({
        next: (result): void => {
          this.messageService.add({ severity: 'success', summary: 'Info', detail: `Cidade '${this.cidade.nome}' cadastrada com sucesso!` });
        },
        error: (error): void => {
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: `Cidade '${this.cidade.nome}' não foi salva!` });
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
