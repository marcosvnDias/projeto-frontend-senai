import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  parametro: string = '';

  @Output('buttonClick') evento = new EventEmitter();

  buscar(parametro: string) {
    if (this.router.url === '/busca' && this.parametro) {
      this.evento.emit(this.parametro)
    } else if (this.parametro) {
      this.router.navigate(['/busca'], { state: { parametro } });
    } else {
      alert('Digite algo para pesquisar.')
    }
  }

  navegarParaCarrinho() {
    this.router.navigate(['/carrinho']);
  }
}
