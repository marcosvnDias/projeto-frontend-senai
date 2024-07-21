import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProdutoComponent } from "./card-produto/card-produto.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardProdutoComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-frontend-senai';
}
