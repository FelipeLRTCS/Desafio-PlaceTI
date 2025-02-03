import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MenuItem } from 'primeng/api/menuitem';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, MessagesModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  
  links!: MenuItem[];
  messages!: Message[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.links = [
      {
        label: 'Cidades',
        icon: 'pi pi-building',
        command: () => {
          this.router.navigate(['']);
        }
      },
      {
        label: 'Comércios',
        icon: 'pi pi-shop',
        command: () => {
          this.router.navigate(['/listar-comercios']);
        }
      },
      {
        label: 'Tipos Comércios',
        icon: 'pi pi-box',
        command: () => {
          this.router.navigate(['/listar-tipos-comercios']);
        }
      }
    ]

    this.messages = [
      { severity: 'contrast', icon: 'pi pi-code' , detail: 'Desafio Técnico - Place TI - Felipe Trevisol' }
    ]
  }
}
